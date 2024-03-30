import { Environment } from "@react-three/drei";

const Lights = () => {
    return(
        <>
            <Environment preset="forest"/>
            <directionalLight 
                castShadow
                intensity={2}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
                position={[2, 5, -2]}
                color="white"
            />
        </>
    )
}

export default Lights;