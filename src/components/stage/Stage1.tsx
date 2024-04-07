
import useCarStore from "@/utils/carStore";
import { useEffect } from "react";
import useGameStore from "@/utils/gameStore";
import RoadStart from "../object/RoadStart";
import { useTexture } from "@react-three/drei";
import RoadEnd from "../object/RoadEnd";
import { CarObj } from "../object/CarOthers";
import ParkingPlace from "../object/ParkingPlace";

export function Stage1() {
  const { checkParking, selectedGearState } = useCarStore();
  const { stageData, setStageData,  } =  useGameStore();
  const STAGE = "stage1";

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

  useEffect(() => {
    let currentQuestId = "001"
    if (checkParking && selectedGearState === "P") {
      onHandleQuest(currentQuestId)
    }
  }, [checkParking, selectedGearState, setStageData]);

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
      <ParkingPlace position={[2.5,-0.2,0]} rotationY={Math.PI/2}/>
      <RoadStart mySize={[8,0.5,4]} position={[0,-0.5,2]} floorTexture={floorTexture} wallTexture={wallTexture}/>
      <RoadEnd mySize={[8,0.5,4]} position={[0,-0.5,-2]} floorTexture={floorTexture} wallTexture={wallTexture}/>
      <CarObj position={[1.5,0,-2.5]}/>
      <CarObj position={[-1.5,0,-2.5]}/>
    </>
  );
}
