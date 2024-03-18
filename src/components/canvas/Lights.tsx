const Lights = () => {
    return(
        <>
            <ambientLight />
            <pointLight position={[20, 30, 10]} intensity={5} decay={0.2} />
            <pointLight position={[-10, -10, -10]} color='orange' decay={0.2} />
            <directionalLight 
                castShadow
                intensity={0.8}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-mapSize-height={512*4}
                shadow-mapSize-width={512*4}
                position={[2, 5, -2]}
                color="white"
            />
        </>
    )
}

export default Lights;