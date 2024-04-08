
import useCarStore from "@/utils/carStore";
import { useEffect } from "react";
import useGameStore from "@/utils/gameStore";
import RoadStart from "../object/RoadStart";
import { useTexture } from "@react-three/drei";
import RoadEnd from "../object/RoadEnd";
import { CarObj } from "../object/CarOthers";
import ParkingPlace from "../object/ParkingPlace";
import CylinderPlace from "../object/CylinderPlace";

export function Stage4() {
  const { checkParking, selectedGearState } = useCarStore();
  const { stageData, setStageData  } =  useGameStore();
  const STAGE = "stage4";

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
    let currentQuestId = "041"
    if (checkParking && selectedGearState === "P") {
      onHandleQuest(currentQuestId)
    }
  }, [checkParking, selectedGearState]);

  const floorTexture = useTexture({
    roughnessMap: "/materials/roughness.png",
    map: "/materials/blue.png",
    normalMap: "/materials/normal.png",
  })

  const wallTexture = useTexture({
    map: "/materials/black.jpeg",
  })

  const wallTexture2 = useTexture({
    roughnessMap: "/materials/roughness.png",
    map: "/materials/yellow.jpeg",
    normalMap: "/materials/normal.png",
  })

  return (
    <>
      <RoadStart mySize={[4.5,0.5,2]} position={[0,-0.5,1]} floorTexture={floorTexture} wallTexture={wallTexture}/>
      <RoadEnd mySize={[4.5,0.5,2]} position={[0,-0.5,-1]} floorTexture={floorTexture} wallTexture={wallTexture}/>
      <CylinderPlace floorTexture={floorTexture} wallTexture={wallTexture2} />
      <ParkingPlace position={[-1,-0.2,-1.2]} rotationY={Math.PI/2}/>
    </>
  );
}
