import useGameStore from "@/utils/gameStore"
import { useEffect, useState } from "react"
import { easeInOut, motion } from "framer-motion"

export default function SelectPanel() {
    const { stageData, setGameState, stageNumber, onHandleStageNumber } = useGameStore()
    const [prevBtn, setPrevBtn] = useState(false)
    const [nextBtn, setNextBtn] = useState(false)

    const onIncrease = () => {
        onHandleStageNumber(stageNumber + 1)
    }

    const onDecrease = () => {
        if(stageNumber === 0) return
        onHandleStageNumber(stageNumber - 1)
    }

    useEffect(()=>{
        if(stageNumber == 0){
            setPrevBtn(true)
        }else{
            setPrevBtn(false)
        }

        if(stageData.length -1 <= stageNumber){
            setNextBtn(true)
        }else{
            setNextBtn(false)
        }
    },[stageNumber, stageData])

    return(
        <div className="select-panel-position">
            <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: { duration: 1, delay: 1.5, type: easeInOut}}}
                className="select-panel">
                {!stageData[stageNumber].unlock && <div className="stage-lock"><div className="lock-icon"/></div> }
                <button className="prev-btn" disabled={prevBtn} onClick={onDecrease}/>
                <button className="stage-number" disabled={!stageData[stageNumber].unlock} onClick={()=> setGameState("START")}>STAGE {stageNumber + 1}</button>
                <button className="next-btn" disabled={nextBtn} onClick={onIncrease}/>
            </motion.div>
        </div>
    )
}