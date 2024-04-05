import ParkingPlace from "./object/ParkingPlace";
import Road from "./object/Road";
import RoadRight from "./object/RoadRight";
import RLUpPoint from "./object/RLUpPoint";
import RRUpPoint from "./object/RRUpPoint";
import RRDwonPoint from "./object/RRDownPoint";
import RLDwonPoint from "./object/RLDownPoint";
import useCarStore from "@/utils/carStore";
import { useEffect } from "react";
import useGameStore from "@/utils/gameStore";

export function Stage1() {
  const { checkParking, selectedGearState } = useCarStore();
  const { stageData, setStageData } =  useGameStore();
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

  return (
    <>
      <RRDwonPoint position={[-8,-0.5,5]}/>
      <Road position={[-8,-0.5,0]}/>
      <RRUpPoint position={[-8,-0.5,-5]}/>
      <RoadRight position={[-3,-0.5,-5]}/>
      <RoadRight position={[2,-0.5,-5]}/>
      <RLUpPoint position={[7,-0.5,-5]}/>
      <Road position={[7,-0.5,0]}/>

      <RoadRight position={[-3,-0.5,5]}/>
      <RoadRight position={[2,-0.5,5]}/>
      <RLDwonPoint position={[7,-0.5,5]}/>
      
      <ParkingPlace position={[-9,-0.2,-5]}/>
    </>
  );
}
