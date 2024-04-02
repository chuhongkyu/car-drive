import ParkingPlace from "./object/ParkingPlace";
import Road from "./object/Road";
import RoadRight from "./object/RoadRight";
import RoadRightUpPoint from "./object/RoadRightUpPoint";

export function Stage1() {
  return (
    <>
      <Road position={[0,-0.5,0]}/>
      <RoadRightUpPoint position={[0,-0.5,-5]}/>
      <RoadRight position={[5,-0.5,-5]}/>
      <RoadRight position={[10,-0.5,-5]}/>

      <ParkingPlace position={[-1,-0.2,-5]}/>
    </>
  );
}
