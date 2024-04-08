import useCarStore from "@/utils/carStore";
import useGameStore from "@/utils/gameStore";
import { useEffect } from "react";

export default function GameSuccess(){
    const { checkStart, setGameState, stageNumber,  onHandleStageNumber } = useGameStore();
    const { setSelectedGearState, setCheckParking}  = useCarStore()
    const onHandleNextGame = () => {
        checkStart(false);
        onHandleStageNumber(stageNumber + 1)
        setGameState("READY");
    }

    useEffect(()=>{
        setSelectedGearState("D")
        setCheckParking(false)
    },[])

    return(
        <div className="game-end-panel">
            <div className="panel">
                <div className="panel-group">
                    <h5>Game Success</h5>
                    <div className="desc">
                        
                    </div>
                    <div className="btn-container">
                        <button className="btn" onClick={onHandleNextGame}>NEXT</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}