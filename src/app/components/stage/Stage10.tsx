import ParkingPlace from "../object/ParkingPlace";
import Road from "../object/Road";
import RoadRight from "../object/RoadRight";
import RLUpPoint from "../object/RLUpPoint";
import RRUpPoint from "../object/RRUpPoint";
import RRDwonPoint from "../object/RRDownPoint";
import RLDwonPoint from "../object/RLDownPoint";
import useCarStore from "@/app/utils/carStore";
import { useEffect } from "react";
import useGameStore from "@/app/utils/gameStore";
import { useTexture } from "@react-three/drei";
import { Vector3 } from "three";

export function Stage10() {
  const { checkParking, selectedGearState } = useCarStore();
  const { stageData, setStageData,  } =  useGameStore();
  const STAGE = "stage10";

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
      <RRDwonPoint floorTexture={floorTexture} wallTexture={wallTexture} position={[-8,-0.5,5]}/>
      <Road floorTexture={floorTexture} wallTexture={wallTexture} position={[-8,-0.5,0]}/>
      
      <RRUpPoint floorTexture={floorTexture} wallTexture={wallTexture} position={[-8,-0.5,-5]}/>
      <RoadRight floorTexture={floorTexture} wallTexture={wallTexture} position={[-3,-0.5,-5]}/>
      <RoadRight floorTexture={floorTexture} wallTexture={wallTexture} position={[2,-0.5,-5]}/>
      
      <RLUpPoint floorTexture={floorTexture} wallTexture={wallTexture} position={[7,-0.5,-5]}/>
      <Road floorTexture={floorTexture} wallTexture={wallTexture} position={[7,-0.5,0]}/>

      <RoadRight floorTexture={floorTexture} wallTexture={wallTexture} position={[-3,-0.5,5]}/>
      <RoadRight floorTexture={floorTexture} wallTexture={wallTexture} position={[2,-0.5,5]}/>
      <RLDwonPoint floorTexture={floorTexture} wallTexture={wallTexture} position={[7,-0.5,5]}/>
      
      <ParkingPlace position={[-9,-0.2,-5]}/>
    </>
  );
}
