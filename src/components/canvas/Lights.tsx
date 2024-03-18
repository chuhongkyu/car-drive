const Lights = () => {
    return(
        <>
            <ambientLight />
            <pointLight position={[20, 30, 10]} intensity={5} decay={0.2} />
            <pointLight position={[-10, -10, -10]} color='orange' decay={0.2} />
        </>
    )
}

export default Lights;