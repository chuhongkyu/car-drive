import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { onStartScene } from "@/utils/atom";


export const useControls = (vehicleApi, chassisApi) => {
  const isStart = useRecoilValue(onStartScene);
  let engineForce = 30;
  
  let [controls, setControls] = useState({});

  useEffect(() => {
    const keyDownPressHandler = (e) => {
      if (isStart) {
        setControls((controls) => ({ 
          ...controls, 
          [e.key]: true 
        }));
      }
    }

    const keyUpPressHandler = (e) => {
      if (isStart) {
        setControls((controls) => ({ 
          ...controls, 
          [e.key]: false 
        }));
      }
    }
  
    window.addEventListener("keydown", keyDownPressHandler);
    window.addEventListener("keyup", keyUpPressHandler);

    return () => {
      window.removeEventListener("keydown", keyDownPressHandler);
      window.removeEventListener("keyup", keyUpPressHandler);
    }
  }, [isStart]);
  


  useEffect(() => {
    if (controls.ArrowUp) {
      vehicleApi.applyEngineForce(engineForce, 2);
      vehicleApi.applyEngineForce(engineForce, 3);
    } else if (controls.ArrowDown) {
      vehicleApi.applyEngineForce(-engineForce, 2);
      vehicleApi.applyEngineForce(-engineForce, 3);
    } else {
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
      // chassisApi.velocity.set(0,0,0)
    }

    if (controls.ArrowLeft) {
      vehicleApi.setSteeringValue(0.35, 2);
      vehicleApi.setSteeringValue(0.35, 3);
      vehicleApi.setSteeringValue(-0.1, 0);
      vehicleApi.setSteeringValue(-0.1, 1);
    } else if (controls.ArrowRight) {
      vehicleApi.setSteeringValue(-0.35, 2);
      vehicleApi.setSteeringValue(-0.35, 3);
      vehicleApi.setSteeringValue(0.1, 0);
      vehicleApi.setSteeringValue(0.1, 1);
    } else {
      for (let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }

  }, [controls, vehicleApi, chassisApi]);

  return controls;
}
