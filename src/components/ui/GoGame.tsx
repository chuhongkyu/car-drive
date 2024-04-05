
import Link from "next/link";
import useIntroStore from "@/utils/introStore";

const GoGame = () => {
    const { introClear } = useIntroStore()
    return(
        <>
            {introClear && 
                <Link className="intro-panel"  href={"/world"}>GoGame</Link>
            }
        </>
        
    )
}

export default GoGame;