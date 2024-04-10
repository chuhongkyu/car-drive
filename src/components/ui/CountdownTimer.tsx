import { useEffect, useState } from "react";

interface ICountProps {
    isStart: boolean
    onClose: () => void
}

const CountdownTimer = ({isStart, onClose }:ICountProps) => {
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        if (!isStart) return;

        if (countdown === 0) {
            onClose()
            return;
        }

        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, isStart]);

    return(
        <div className="timer-box">
            <p className="text">
                <span>{countdown.toString().padStart(2, '0')}s</span>
            </p>
        </div>
    )
}

export default CountdownTimer