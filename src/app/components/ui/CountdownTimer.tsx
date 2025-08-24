import useGameStore from "@/app/utils/gameStore";
import { useEffect, useState } from "react";

interface ICountProps {
    onClose: () => void
}

const CountdownTimer = ({ onClose }:ICountProps) => {
    const [ isStart, setStart ] = useState(true)
    const [countdown, setCountdown] = useState(120);
    const { setClearTimer } = useGameStore()

    useEffect(() => {
        if (!isStart) return;

        if (countdown === 0) {
            setStart(!isStart)
            onClose()
            return;
        }

        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => {
            setClearTimer(countdown)
            clearTimeout(timer)
        };
    }, [countdown, isStart]);

    return(
        <div className="timer-box">
            <p className="text">
                <span>{countdown.toString().padStart(3, "0")}s</span>
            </p>
        </div>
    )
}

export default CountdownTimer