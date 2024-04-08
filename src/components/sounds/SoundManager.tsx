import useCarStore from "@/utils/carStore";
import useGameStore from "@/utils/gameStore";
import { useEffect, useRef } from "react";

const start = "/music/start.wav"
const destory = "/music/destory.wav"
const success = "/music/success.wav"

const SoundManager = () => {
    const { isStart } = useGameStore();
    const { isCarCollide } = useCarStore()
    const startAudioRef = useRef(null);
    const destroyAudioRef = useRef(null);

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

    return(
        <div>
            <audio ref={destroyAudioRef} src={destory} />
            <audio ref={startAudioRef} src={start} />
        </div>
    )
}

export default SoundManager;