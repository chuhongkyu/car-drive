import useCarStore from "@/app/utils/carStore";
import useGameStore from "@/app/utils/gameStore";
import { useEffect, useRef } from "react";

const start = "/music/start.wav"
const destory = "/music/destory.wav"
const success = "/music/success.wav"

const SoundManager = () => {
    const { isStart, gameState } = useGameStore();
    const { isCarCollide } = useCarStore()
    const startAudioRef = useRef<HTMLAudioElement>(null);
    const destroyAudioRef = useRef<HTMLAudioElement>(null);
    const successRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if(isCarCollide){
            if (destroyAudioRef.current) {
                destroyAudioRef.current.play();
            }
        }
    }, [isCarCollide]);

    useEffect(()=>{
        if(isStart){
            if(startAudioRef.current){
                startAudioRef.current.play()
            }
        }
    },[isStart])

    useEffect(()=>{
        if(gameState === "SUCCESS"){
            if(successRef.current){
                successRef.current.play()
            }
        }
    },[gameState])

    return(
        <div>
            <audio autoPlay={false} ref={destroyAudioRef} src={destory} />
            <audio autoPlay={false} ref={startAudioRef} src={start} />
            <audio autoPlay={false} ref={successRef} src={success} />
        </div>
    )
}

export default SoundManager;