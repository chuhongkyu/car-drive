import ParkingPlace from "./object/ParkingPlace";
import Road from "./object/Road";
import RoadRight from "./object/RoadRight";
import RLUpPoint from "./object/RLUpPoint";
import RRUpPoint from "./object/RRUpPoint";
import RRDwonPoint from "./object/RRDownPoint";
import RLDwonPoint from "./object/RLDownPoint";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkParking, selectedGearState, stageData } from "@/utils/atom";
import { useEffect } from "react";

export function Stage1() {
  const isParking = useRecoilValue(checkParking)
  const selectedGear =  useRecoilValue(selectedGearState);
  const [data, setStageData] =  useRecoilState(stageData);


  useEffect(() => {
  if (isParking && selectedGear === "P") {
    setStageData((prevStageData) =>
      prevStageData.map((stage) => 
        stage.name === "stage1"
          ? {
              ...stage,
              quest: stage.quest.map((q) =>
                q.id === "001" ? { ...q, clear: true } : q
              ),
            }
          : stage
      )
    );
  }
}, [isParking, selectedGear, setStageData]);

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
