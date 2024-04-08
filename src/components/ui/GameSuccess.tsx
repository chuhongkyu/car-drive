import useCarStore from "@/utils/carStore";
import useGameStore from "@/utils/gameStore";
import { useEffect, useState } from "react";

export default function GameSuccess(){
    const { checkStart, stageData, setGameState, stageNumber,  onHandleStageNumber } = useGameStore();
    const { setSelectedGearState, setCheckParking}  = useCarStore()
    const [ clear, setClear ] = useState(false)


    const onHandleNextGame = () => {
        checkStart(false);
        onHandleStageNumber(stageNumber + 1)
        setGameState("READY");
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
                    <div className="desc">
                        
                    </div>
                    <div className="btn-container">
                        {clear ? <button className="btn" onClick={onHandleSelectPanel}>Select Stage</button> : <button className="btn" onClick={onHandleNextGame}>NEXT</button>}
                    </div>
                </div>  
            </div>
        </div>
    )
}