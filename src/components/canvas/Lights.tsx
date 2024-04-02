import { Environment } from "@react-three/drei";

const Lights = () => {
    return(
        <>
            {/* <Environment files="/skybox/bg.hdr" resolution={256} background blur={1}/> */}
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

export default Lights;