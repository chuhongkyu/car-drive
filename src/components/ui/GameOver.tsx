import useCarStore from "@/utils/carStore";
import useGameStore from "@/utils/gameStore";
import { useEffect } from "react";

export default function GameOver(){
    const { checkStart, setGameState, clearTimer }= useGameStore();
    const { setSelectedGearState, setCheckParking}  = useCarStore()

    const onHandleRetry = () => {
        checkStart(false)
        setGameState("START");
    }

    const onHandleSelectPanel = () => {
        checkStart(false);
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
                    <h5>Game Over</h5>
                    <div className="desc">
                        
                    </div>
                    <div className="btn-container">
                        <button className="btn" onClick={onHandleRetry}>ReTry</button>
                        <button className="btn" onClick={onHandleSelectPanel}>Select Stage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}