import { Html } from "@react-three/drei"

const InfoNumber = ({ord}:{ord: number}) => {
    return(
        <Html className="info-number">
            <p>{ord}</p>
        </Html>
    )
}

export default InfoNumber;