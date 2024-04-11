import useGameStore from "@/utils/gameStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountdownTimer from "../ui/CountdownTimer";


const GameStatus = () => {
    const { stageData, stageNumber, setGameState } = useGameStore()
    const [nav, setNav] = useState(true)

    useEffect(()=>{
        const time = setTimeout(()=> setNav(false), 1000)

        return ()=> clearTimeout(time)
    },[stageData])

    const onClick = () => setNav((prev) => !prev)

    const onClose = () => {
        setGameState("GAMEOVER")
    }

    return(
        <div className="quest-status">
            <div className="quest-icon" onClick={onClick}>
                <p>Q</p>
                <Image width={30} height={30} src={"/ui/circle-icon.png"} alt="icon"/>
            </div>
            <CountdownTimer onClose={onClose}/>
            <div className={`quests-bg ${nav ? "": "active"}`}>
                <div className="quests">
                    <div className="status">
                        {stageData[stageNumber].quest.map((el)=>{
                            return(
                                <span className="quest" data-clear={el.clear} key={el.id + "KEY" + stageData[stageNumber].name}>
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