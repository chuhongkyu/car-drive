import { introStart } from "@/utils/atom";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion"

const GoGame = () => {
    const intro = useRecoilValue(introStart)
    return(
        <>
            {intro && 
            <motion.div 
                initial={{y: 2, scale: 0}}
                animate={{y: 0, scale: 1}}
                transition={{duration: 1, type: "spring"}}
                className="intro-panel">
                <Link href={"/world"}>GoGame</Link>
            </motion.div>}
        </>
        
    )
}

export default GoGame;