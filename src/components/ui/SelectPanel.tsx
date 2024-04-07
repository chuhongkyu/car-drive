import useGameStore from "@/utils/gameStore"

export default function SelectPanel() {
    const { setGameState, stageNumber } = useGameStore()
    return(
        <div className="start-panel">
            <div className="stage-number">STAGE {stageNumber + 1}</div>
            <button className="start-btn" onClick={()=> setGameState("START")}>Start</button>
        </div>
    )
}