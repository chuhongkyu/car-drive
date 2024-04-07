import useGameStore from "@/utils/gameStore";
import Image from "next/image";
import { useEffect, useState } from "react";


const GameStatus = () => {
    const { stageData, stageNumber } = useGameStore()

    const [nav, setNav] = useState(true)

    useEffect(()=>{
        const time = setTimeout(()=> setNav(false), 1000)

        return ()=> clearTimeout(time)
    },[stageData])

    const onClick = () => setNav((prev) => !prev)

    return(
        <div className="game-status">
            <div className="game-icon" onClick={onClick}>
                <Image width={25} height={25} src={"/icons/info.png"} alt="icon"/>
            </div>
            <div className={`quests ${nav ? "": "active"}`}>
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
    )
}

export default GameStatus;