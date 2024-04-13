
import useCarStore from "@/utils/carStore";
import { useEffect } from "react";
import useGameStore from "@/utils/gameStore";
import RoadStart from "../object/RoadStart";
import { useTexture } from "@react-three/drei";
import RoadEnd from "../object/RoadEnd";
import { CarObj } from "../object/CarOthers";
import ParkingPlace from "../object/ParkingPlace";
import StartPlace from "../object/StartPlace";

export function Stage5() {
  const { checkParking, selectedGearState } = useCarStore();
  const { stageData, setStageData  } =  useGameStore();
  const STAGE = "stage5";

  const onHandleQuest = (currentQuestId:string)=> {
    setStageData(stageData.map((stage) => 
          stage.name === STAGE
            ? {
                ...stage,
                quest: stage.quest.map((q) =>
                  q.id === currentQuestId ? { ...q, clear: true } : q
                ),
              }
            : stage
        )
    );
  }

  const onHandleResetQuest = (currentQuestId:string)=> {
    setStageData(stageData.map((stage) => 
          stage.name === STAGE
            ? {
                ...stage,
                quest: stage.quest.map((q) =>
                  q.id === currentQuestId ? { ...q, clear: false } : q
                ),
              }
            : stage
        )
    );
  }

  useEffect(() => {
    let currentQuestId = "051"
    if (checkParking && selectedGearState === "P") {
      onHandleQuest(currentQuestId)
    }
    return () => onHandleResetQuest(currentQuestId)
  }, [checkParking, selectedGearState]);

  const floorTexture = useTexture({
    roughnessMap: "/materials/roughness.png",
    map: "/materials/blue.png",
    normalMap: "/materials/normal.png",
  })

  const wallTexture = useTexture({
    map: "/materials/black.jpeg",
  })

  return (
    <>
      <RoadStart mySize={[8,0.5,4]} position={[0,-0.5,2]} floorTexture={floorTexture} wallTexture={wallTexture}/>
      <RoadEnd mySize={[8,0.5,4]} position={[0,-0.5,-2]} floorTexture={floorTexture} wallTexture={wallTexture}/>
      <CarObj rotation={[0,Math.PI/2-0.5,0]} parkingY={Math.PI-0.5} position={[-2,-0.05,-2.5]} color={0x00b545}/>
      <CarObj rotation={[0,Math.PI/2-0.5,0]} parkingY={Math.PI-0.5} position={[-2,-0.05,-1.5]}/>
      <CarObj rotation={[0,Math.PI/2-0.5,0]} parkingY={Math.PI-0.5} position={[-2,-0.05,-0.5]} color={0xfffc38} />
      <CarObj rotation={[0,Math.PI/2-0.5,0]} parkingY={Math.PI-0.5} position={[-2,-0.05,0.5]}/>

      <CarObj rotation={[0,-Math.PI/2-0.5,0]} parkingY={Math.PI-0.5} position={[2,-0.05,-2.5]} color={0x00b545}/>
      <ParkingPlace position={[1.2,-0.2,-2.3]} rotationY={-0.5}/>
      <CarObj rotation={[0,-Math.PI/2-0.5,0]} parkingY={Math.PI-0.5} position={[2,-0.05,-0.5]}/>
      <CarObj rotation={[0,-Math.PI/2-0.5,0]} parkingY={Math.PI-0.5} position={[2,-0.05,0.5]}/>
      <StartPlace position={[stageData[4].carPosition[0],-0.2, stageData[4].carPosition[2]]} rotationY={Math.PI/2}/>
    </>
  );
}
