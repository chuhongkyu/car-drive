import useGameStore from "@/utils/gameStore";

export default function GameOver(){
    const { checkStart, setGameState }= useGameStore();
    const onHandleRetry = () => {
        checkStart(false);
        setGameState("READY");
    }
    return(
        <div className="game-over-panel">
            <div className="panel">
                <h5>Game Over</h5>
                <div className="desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis praesentium eveniet officiis rem atque, incidunt et excepturi dolores dicta sit optio recusandae qui ipsum minima ullam, debitis quisquam molestias!</p>
                </div>
                <div className="btn-container">
                    <button onClick={onHandleRetry}>ReTry</button>
                    <button>SelectStage</button>
                </div>
            </div>
        </div>
    )
}