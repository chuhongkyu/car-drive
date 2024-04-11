import useCarStore from "@/utils/carStore";
import useGameStore from "@/utils/gameStore";
import useLocalSotre from "@/utils/localStore";
import { useEffect, useState } from "react";
import StarRating from "./StarRating";


export default function GameSuccess(){
    const { checkStart, stageData, setGameState, stageNumber,  onHandleStageNumber, clearTimer } = useGameStore();
    const { setSelectedGearState, setCheckParking}  = useCarStore()
    const [ clear, setClear ] = useState(false)
    const { saveData, setSaveData } = useLocalSotre()

    const onHandleNextGame = () => {
        checkStart(false);
        onHandleStageNumber(stageNumber + 1)
        setGameState("READY");

        const currentStageName = stageData[stageNumber].name;
        const nextStageName = stageData[stageNumber + 1].name;

        const clearStageIndex = saveData.recordData.findIndex(record => record.name === currentStageName);
        // console.log('클리어한 스테이지의 레코드 인덱스 찾기', clearStageIndex)

        if (clearStageIndex !== -1) {
            const currentClearTime = saveData.recordData[clearStageIndex].clearTime || 0;
            const newClearTime = Math.max(currentClearTime, clearTimer);
            saveData.recordData[clearStageIndex].clearTime = newClearTime;
        }

        const nextStageIndex = saveData.recordData.findIndex(record => record.name === nextStageName);
        if (nextStageIndex === -1) {
            const newRecord = {
                name: nextStageName,
                unlock: true
            };
            saveData.recordData.push(newRecord);
        } else {
            saveData.recordData[nextStageIndex].unlock = true;
        }

        const updateData = {
            currentStage: saveData.recordData.length - 1,
            recordData: [...saveData.recordData]
        };
        setSaveData(updateData);
    }

    const onHandleSelectPanel = () => {
        checkStart(false);
        setGameState("READY");
    }

    useEffect(()=>{
        setSelectedGearState("D")
        setCheckParking(false)
    },[])

    useEffect(()=>{
        if(stageNumber === stageData.length - 1){
            setClear(true)
        }
    },[stageNumber])

    return(
        <div className="game-end-panel">
            <div className="panel">
                <div className="panel-group">
                    <h5>Game Success!</h5>
                    {clear && <h4>ALL CLEAR</h4>}
                    <StarRating clearTimer={clearTimer}/>
                    <div className="btn-container">
                        {clear ? <button className="btn" onClick={onHandleSelectPanel}>Select Stage</button> : <button className="btn" onClick={onHandleNextGame}>NEXT</button>}
                    </div>
                </div>  
            </div>
        </div>
    )
}