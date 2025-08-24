import useGameStore from "@/app/utils/gameStore";
import { useEffect } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

interface GameOverAdProps {
  gameState: string;
}

function GameOverAd({ gameState }:GameOverAdProps) {
    const { setGameState } = useGameStore()

    // useEffect(() => {
    //     if (gameState === "GAMEOVERAD") {
    //     try {
    //         (window.adsbygoogle = window.adsbygoogle || []).push({});
    //     } catch (e) {
    //         console.error("AdSense error:", e);
    //     }
    //     }
    // }, [gameState]);

    // if (gameState !== "GAMEOVERAD") {
    //     return null;
    // }

    // const onClose = ()=>{
    //   setGameState("GAMEOVER")
    // }

    useEffect(()=>{
      setGameState("GAMEOVER")
    },[])

  return (
    // <motion.div 
    //   initial={{opacity: 0}}
    //   animate={{opacity: 1}}
    //   className="game-end-panel-popup">
    //   {/* Google AdSense 광고 */}
    //   <span className="game-x-icon" onClick={onClose}>X</span>
    //   <div className="game-panel">
    //     <ins className="adsbygoogle"
    //        style={{ display: 'block' }}
    //        data-ad-client="ca-pub-1979490362657562"
    //        data-ad-slot="7556864969"
    //        data-ad-format="auto"
    //        data-full-width-responsive="true"></ins>
    //   </div>
    // </motion.div>
    <>
    </>
  );
}

export default GameOverAd;
