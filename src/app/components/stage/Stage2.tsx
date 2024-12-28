
import useCarStore from "@/app/utils/carStore";
import { useEffect } from "react";
import useGameStore from "@/app/utils/gameStore";
import RoadStart from "../object/RoadStart";
import { useTexture } from "@react-three/drei";
import RoadEnd from "../object/RoadEnd";
import { CarObj } from "../object/CarOthers";
import ParkingPlace from "../object/ParkingPlace";
import StartPlace from "../object/StartPlace";

export function Stage2() {
  const { checkParking, selectedGearState } = useCarStore();
  const { stageData, setStageData  } =  useGameStore();
  const STAGE = "stage2";

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
    let currentQuestId = "021"
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
      <ParkingPlace position={[2,-0.2,0.5]} rotationY={Math.PI/2}/>
      <RoadStart mySize={[4.5,0.5,3.5]} position={[0,-0.5,1.5]} floorTexture={floorTexture} wallTexture={wallTexture}/>
      <RoadEnd  mySize={[4.5,0.5,3.5]} position={[0,-0.5,-2]} floorTexture={floorTexture} wallTexture={wallTexture}/>
      <CarObj position={[-0.5,-0.05,-2]} color={0x00b545}/>
      <CarObj position={[1.5,-0.05,-2]}/>
      <CarObj position={[-1.5,-0.05,-2]}/>
      <StartPlace position={[stageData[1].carPosition[0],-0.2, stageData[1].carPosition[2]]} rotationY={Math.PI/2}/>
    </>
  );
}
