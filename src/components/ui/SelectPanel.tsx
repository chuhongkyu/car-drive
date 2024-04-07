import useGameStore from "@/utils/gameStore"

export default function SelectPanel() {
    const { stageData, setGameState, stageNumber } = useGameStore()

    return(
        <div className="start-panel">
            <div className="start-container">
                <div className="stage-number">STAGE {stageNumber + 1}</div>
                <div className="stage-desc">
                    <h5>Quset</h5>
                    {stageData[stageNumber].quest.map((el, i)=> {
                        return(
                            <span className="desc" key={el.id + "QUEST-KEY"}>{el.desc}</span>
                        )
                    })}
                </div>
                <button className="start-btn" onClick={()=> setGameState("START")}>START</button>
            </div>
        </div>
    )
}