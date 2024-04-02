import ParkingPlace from "./object/ParkingPlace";
import Road from "./object/Road";
import RoadRight from "./object/RoadRight";
import RLUpPoint from "./object/RLUpPoint";
import RRUpPoint from "./object/RRUpPoint";
import RRDwonPoint from "./object/RRDownPoint";
import RLDwonPoint from "./object/RLDownPoint";

export function Stage1() {
  return (
    <>
      <RRDwonPoint position={[0,-0.5,5]}/>
      <Road position={[0,-0.5,0]}/>
      <RRUpPoint position={[0,-0.5,-5]}/>
      <RoadRight position={[5,-0.5,-5]}/>
      <RoadRight position={[10,-0.5,-5]}/>
      <RLUpPoint position={[15,-0.5,-5]}/>
      <Road position={[15,-0.5,0]}/>

      <RoadRight position={[5,-0.5,5]}/>
      <RoadRight position={[10,-0.5,5]}/>
      <RLDwonPoint position={[15,-0.5,5]}/>
      
      <ParkingPlace position={[-1,-0.2,-5]}/>
    </>
  );
}
