import { currentStageNumber, stageData } from "@/utils/atom";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";


const GameStatus = () => {
    const [data, setData] = useRecoilState(stageData)
    const [current, setNumber] = useRecoilState(currentStageNumber)

    const [nav, setNav] = useState(true)

    useEffect(()=>{
        // console.log(data)
        const time = setTimeout(()=> setNav(false), 1000)

        return ()=> clearTimeout(time)
    },[data])

    const onClick = () => setNav((prev) => !prev)

    return(
        <div className="game-status">
            <div className="game-icon" onClick={onClick}>
                <Image width={25} height={25} src={"/icons/info.png"} alt="icon"/>
            </div>
            <div className={`quests ${nav ? "": "active"}`}>
                <h5>{data[current].name}</h5>
                <div className="status">
                    {data[current].quest.map((el)=>{
                        return(
                            <span className="quest" data-clear={el.clear} key={el.id + "KEY" + data[current].name}>
                                <div className="dot"/>
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