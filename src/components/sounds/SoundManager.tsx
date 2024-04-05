import useGameStore from "@/utils/gameStore";
import { useEffect, useRef } from "react";

const start = "/music/start.wav"
const destory = "/music/destory.wav"
const success = "/music/success.wav"

const SoundManager = () => {
    const { gameState, isStart } = useGameStore();
    const startAudioRef = useRef(null);
    const destroyAudioRef = useRef(null);

    useEffect(() => {
        if (gameState === "GAMEOVER") {
            if (destroyAudioRef.current) {
                destroyAudioRef.current.play();
            }
        }
    }, [gameState]);

    useEffect(()=>{
        if(isStart){
            if(startAudioRef.current){
                startAudioRef.current.play()
            }
        }
    },[isStart])

    return(
        <div>
            <audio ref={destroyAudioRef} src={destory} />
            <audio ref={startAudioRef} src={start} />
        </div>
    )
}

export default SoundManager;