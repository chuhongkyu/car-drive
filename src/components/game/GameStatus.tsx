import useGameStore from "@/utils/gameStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountdownTimer from "../ui/CountdownTimer";


const GameStatus = () => {
    const { stageData, stageNumber } = useGameStore()
    const [ isStart, setStart] = useState(true)
    const [nav, setNav] = useState(true)

    useEffect(()=>{
        const time = setTimeout(()=> setNav(false), 1000)

        return ()=> clearTimeout(time)
    },[stageData])

    const onClick = () => setNav((prev) => !prev)

    const onClose = () => {}

    return(
        <div className="quest-status">
            <div className="quest-icon" onClick={onClick}>
                <p>Q</p>
                <Image width={30} height={30} src={"/ui/circle-icon.png"} alt="icon"/>
            </div>
            <CountdownTimer isStart={isStart} onClose={onClose}/>
            <div className={`quests-bg ${nav ? "": "active"}`}>
                <div className="quests">
                    <h5>{stageData[stageNumber].name}</h5>
                    <div className="status">
                        {stageData[stageNumber].quest.map((el)=>{
                            return(
                                <span className="quest" data-clear={el.clear} key={el.id + "KEY" + stageData[stageNumber].name}>
                                    <span className="dot"/>
                                    <p>{el.desc}</p>
                                </span>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default GameStatus;