import useGameStore from "@/utils/gameStore";

export default function GameOver(){
    const { checkStart, setGameState }= useGameStore();
    const onHandleRetry = () => {
        checkStart(false);
        setGameState("READY");
    }
    return(
        <div className="game-end-panel">
            <div className="panel">
                <div className="panel-group">
                    <h5>Game Over</h5>
                    <div className="desc">
                        
                    </div>
                    <div className="btn-container">
                        <button className="btn" onClick={onHandleRetry}>ReTry</button>
                        <button>SelectStage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}