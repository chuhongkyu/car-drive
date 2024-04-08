
import Link from "next/link";
import useIntroStore from "@/utils/introStore";
import { motion } from "framer-motion"

const GoGame = () => {
    const { introClear } = useIntroStore()
    return(
        <>
            {introClear && 
                <div className="gogame-btn-position">
                    <motion.div
                        initial={{y: 2, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        className="gogame-btn">
                        <Link href={"/world"}>GoGame</Link>
                    </motion.div>
                </div>
            }
        </>
        
    )
}

export default GoGame;