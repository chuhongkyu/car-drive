import useCarStore from "@/utils/carStore";
import useGameStore from "@/utils/gameStore";
import { Html } from "@react-three/drei";
import { useGesture } from "@use-gesture/react";
import { useEffect, useRef, useState } from "react";

export default function JoystickContainer({ vehicleApi, chassisApi }) {
    const { selectedGearState, setSelectedGearState  } = useCarStore();
    const { cameraType, setCameraType } = useGameStore()

    const steeringWheelRef = useRef(null);
    const [rotation, setRotation] = useState(0);
    const [startRotation, setStartRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [engineForce, setEngineForce] = useState(5)

    const onHandleGearChange = (event) => {
        setSelectedGearState(event.target.value);
    };

    const bind:any = useGesture({
        onDragStart: () => {
            setStartRotation(rotation);
        },
        onDrag: ({ movement: [x], dragging }) => {
            const newRotation = Math.max(-0.35, Math.min(0.35, startRotation + x / 300));
            setRotation(newRotation);

            vehicleApi.setSteeringValue(-newRotation, 2);
            vehicleApi.setSteeringValue(-newRotation, 3);
            if(newRotation > 0){
                vehicleApi.setSteeringValue(0.1, 0);
                vehicleApi.setSteeringValue(0.1, 1);
            }else{
                vehicleApi.setSteeringValue(-0.1, 0);
                vehicleApi.setSteeringValue(-0.1, 1);
            }
            setIsDragging(dragging);
        },
        onDragEnd: () => {

        }
    });

    useEffect(() => {
        if (rotation === 0) {
            for (let i = 0; i < 4; i++) {
                vehicleApi.setSteeringValue(0, i);
            }
        }
    }, [rotation, vehicleApi]);

    useEffect(() => {
        if (!isDragging) {
            const interval = setInterval(() => {
                setRotation((prevRotation) => {
                    const changeAmount = 0.008;
                    // 바퀴의 회전 방향을 고려하여 조절
                    let newRotation = prevRotation > 0 
                        ? Math.max(0, prevRotation - changeAmount) 
                        : Math.min(0, prevRotation + changeAmount);


                    if (newRotation === prevRotation) {
                        clearInterval(interval);
                        newRotation = 0;
                    }


                    if (newRotation === 0) {
                        for (let i = 0; i < 4; i++) {
                            vehicleApi.setSteeringValue(0, i);
                        }
                    } else {
                        vehicleApi.setSteeringValue(-newRotation, 2);
                        vehicleApi.setSteeringValue(-newRotation, 3);
                    }

                    return newRotation;
                });
            }, 20);

            return () => clearInterval(interval);
        }
    }, [isDragging, vehicleApi]);

    useEffect(()=> {
        if(selectedGearState === "P"){
            console.log(vehicleApi)
            vehicleApi.applyEngineForce(0, 2);
            vehicleApi.applyEngineForce(0, 3);
            vehicleApi.setBrake(0.5,2)
            vehicleApi.setBrake(0.5,3)
            chassisApi.velocity.set(0,0,0)
            setEngineForce(0)
        }else if(selectedGearState === "D"){
            vehicleApi.applyEngineForce(engineForce, 2);
            vehicleApi.applyEngineForce(engineForce, 3);
        }else if(selectedGearState === "R"){
            vehicleApi.applyEngineForce(-engineForce, 2);
            vehicleApi.applyEngineForce(-engineForce, 3);
        }else{
            vehicleApi.applyEngineForce(0, 2);
            vehicleApi.applyEngineForce(0, 3);
        }

    },[selectedGearState, chassisApi, vehicleApi])

    const onHandleAccel = ()=> {
        vehicleApi.setBrake(0,2)
        vehicleApi.setBrake(0,3)
        if(engineForce < 15){
            setEngineForce((prev) => prev + 5)
        }else{

        }
        if(selectedGearState === "D"){
            vehicleApi.applyEngineForce(engineForce, 2);
            vehicleApi.applyEngineForce(engineForce, 3);
        }else if(selectedGearState === "R"){
            vehicleApi.applyEngineForce(-engineForce, 2);
            vehicleApi.applyEngineForce(-engineForce, 3);
        }else{
            vehicleApi.applyEngineForce(0, 2);
            vehicleApi.applyEngineForce(0, 3);
        }
    }

    const onHandleBrake = ()=> {
        
        setEngineForce(5);
        if( engineForce <= 10) {
            vehicleApi.setBrake(0.8,2)
            vehicleApi.setBrake(0.8,3)
        }else if( engineForce <= 5){
            vehicleApi.setBrake(0.5,2)
            vehicleApi.setBrake(0.5,3)
            chassisApi.velocity.set(0,0,0)
        }else{
            vehicleApi.setBrake(0.5,2)
            vehicleApi.setBrake(0.5,3)
        }

        if(selectedGearState === "D" || "R" ){ 
            vehicleApi.applyEngineForce(engineForce, 2);
            vehicleApi.applyEngineForce(engineForce, 3);
            //chassisApi.velocity.set(0,0,0)
        }else{
            // chassisApi.velocity.set(0,0,0)
        }
    }

    const onHandleCameraType = () => {
        if(cameraType === "ALL"){
            setCameraType("FOCUS")
        }else if(cameraType === "FOCUS"){
            setCameraType("VIEW")
        }else if(cameraType === "VIEW"){
            setCameraType("ALL")
        }
    }

    return (
        <Html wrapperClass="ui-root" className="ui-container">
            <div className="bottom">
                {cameraType === "VIEW" && <div className="car-front"></div>}
                <form className="gear-container">
                    <div className="btn-gear">
                        <input 
                            type="radio" 
                            id="drive" 
                            name="gear" 
                            value="D" 
                            checked={selectedGearState === 'D'} 
                            onChange={onHandleGearChange}
                        />
                        <label htmlFor="drive" className="btn">D</label>
                    </div>
                    {/* <div className="btn-gear">
                        <div className="btn">N</div>
                    </div> */}
                    <div className="btn-gear">
                        <input 
                            type="radio" 
                            id="park" 
                            name="gear" 
                            value="P"
                            checked={selectedGearState=== 'P'} 
                            onChange={onHandleGearChange}
                        />
                        <label htmlFor="park" className="btn">P</label>
                    </div>
                    <div className="btn-gear">
                        <input 
                            type="radio" 
                            id="reverse" 
                            name="gear" 
                            value="R"
                            checked={selectedGearState === 'R'} 
                            onChange={onHandleGearChange}
                        />
                        <label htmlFor="reverse" className="btn">R</label>
                    </div>
                </form>
                <div className="joystick-container">
                    <div className="camera-container">
                        <button onClick={onHandleCameraType}>카메라</button>
                    </div>
                    <div className="brake-container">
                        <button className="brake" onClick={onHandleBrake}>

                        </button>
                        <button className="accel" onClick={onHandleAccel}>{engineForce}</button>
                    </div>
                </div>
                <div className="steering-wheel-bg" {...bind()}>
                    <div className="steering-panel"></div>
                    <div className="steering-wheel" ref={steeringWheelRef} style={{ transform: `rotate(${rotation * 1530}deg)` }}></div>
                </div>
            </div>
        </Html>
    );
}