
import Link from "next/link";
import useIntroStore from "@/utils/introStore";

const GoGame = () => {
    const { introClear } = useIntroStore()
    return(
        <>
            {introClear && 
                <Link className="go-game-btn"  href={"/world"}>GoGame</Link>
            }
        </>
        
    )
}

export default GoGame;