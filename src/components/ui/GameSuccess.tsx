import useGameStore from "@/utils/gameStore";

export default function GameSuccess(){
    const { checkStart, setGameState, stageNumber,  onHandleStageNumber } = useGameStore();

    const onHandleNextGame = () => {
        checkStart(false);
        onHandleStageNumber(stageNumber + 1)
        setGameState("READY");
    }

    return(
        <div className="game-over-panel">
            <div className="panel">
                <h5>Game Success</h5>
                <div className="desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis praesentium eveniet officiis rem atque, incidunt et excepturi dolores dicta sit optio recusandae qui ipsum minima ullam, debitis quisquam molestias!</p>
                </div>
                <div className="btn-container">
                    <button onClick={onHandleNextGame}>NEXT</button>
                </div>
            </div>
        </div>
    )
}