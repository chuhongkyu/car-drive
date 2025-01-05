import useGameStore from "@/app/utils/gameStore"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import useLocalSotre from "@/app/utils/localStore"
import useDebugStore from "@/app/utils/debugStore"
import StarRating from "./StarRating"
import { Html } from "@react-three/drei"

export default function SelectPanel() {
    const { stageData, setGameState, stageNumber, onHandleStageNumber } = useGameStore()
    const { saveData } = useLocalSotre()
    const [prevBtn, setPrevBtn] = useState(false)
    const [nextBtn, setNextBtn] = useState(false)
    const { debug } = useDebugStore()

    const onIncrease = () => {
        onHandleStageNumber(stageNumber + 1)
    }

    const onDecrease = () => {
        if(stageNumber === 0) return
        onHandleStageNumber(stageNumber - 1)
    }

    useEffect(()=>{
        if(stageNumber === 0){
            setPrevBtn(true)
        }else{
            setPrevBtn(false)
        }

        if(stageData.length - 1 <= stageNumber){
            setNextBtn(true)
        }else{
            setNextBtn(false)
        }
        
    },[stageNumber, stageData])

    return(
        <Html center className="select-panel-position">
            <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeInOut"}}}
                className="select-panel">
                <button className="prev-btn" disabled={prevBtn} onClick={onDecrease}/>
                {/* 디버그용 버튼 */}
                {debug && <div onClick={()=> setGameState("START")}>debug</div>}
                <button 
                    className="stage-number" 
                    disabled={!saveData.recordData[stageNumber]?.unlock} 
                    onClick={
                        !saveData.recordData[stageNumber]?.unlock
                        ? undefined
                        : () => setGameState("START")
                    }
                >
                    {!saveData.recordData[stageNumber]?.unlock ? <span className="stage-lock"></span> : "STAGE " }
                    {stageNumber + 1}</button>
                <button className="next-btn" disabled={nextBtn} onClick={onIncrease}/>
                {saveData.recordData[stageNumber]?.clearTime && saveData.recordData[stageNumber]?.unlock && <StarRating clearTimer={saveData.recordData[stageNumber].clearTime}/>}
            </motion.div>
        </Html>
    )
}