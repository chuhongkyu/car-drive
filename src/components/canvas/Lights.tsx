import { Environment, SpotLight, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const DefaultLights = () => {
    return(
        <>
            <Environment files="/skybox/bg.hdr" resolution={256} background blur={1}/>
            <directionalLight 
                castShadow
                intensity={2}
                shadow-camera-top={80}
                shadow-camera-bottom={-80}
                shadow-camera-left={-80}
                shadow-camera-right={80}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
                position={[8, 10, 5]}
                color="white"
            />
        </>
    )
}

const WorldLights = () => {
    const dirLight = useRef(null);
    return(
        <>
            <ambientLight intensity={1}/>
            <directionalLight 
                ref={dirLight}
                castShadow
                intensity={2.5}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-mapSize-height={2048}
                shadow-mapSize-width={2048}
                position={[3, 10, 5]}
                color="white"
            />
        </>
    )
}

export { DefaultLights, WorldLights };