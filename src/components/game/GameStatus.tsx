import { currentStageNumber, stageData } from "@/utils/atom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";


const GameStatus = () => {
    const [data, setData] = useRecoilState(stageData)
    const [current, setNumber] = useRecoilState(currentStageNumber)
    useEffect(()=>{
        console.log(data)
    },[data])

    return(
        <div className="game-status">
            <div className="quests">
                <h5>{data[current].name}</h5>
                <div className="status">
                    {data[current].quest.map((el)=>{
                        return(
                            <span className="quest" data-clear={el.clear} key={el.id + "KEY" + data[current].name}>
                                <span/>
                                <p>{el.desc}</p>
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GameStatus;