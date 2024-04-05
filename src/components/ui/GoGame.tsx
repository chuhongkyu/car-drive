
import Link from "next/link";
import useIntroStore from "@/utils/introStore";

const GoGame = () => {
    const { introClear } = useIntroStore()
    return(
        <>
            {introClear && 
            <div className="intro-panel">
                <Link href={"/world"}>GoGame</Link>
            </div>}
        </>
        
    )
}

export default GoGame;