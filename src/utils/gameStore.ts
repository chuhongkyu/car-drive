import { create } from 'zustand'
import { ORIGIN_STAGE_DATA } from './stageData';

type GameState = "READY" | "START" | "SUCCESS" | "GAMEOVER"

type GameStore = {
    isStart: boolean;
    gameState: GameState
    stageNumber: number;
    stageData: IData[]
    checkStart: (value: boolean) => void,
    setGameState: (value: GameState) => void,
    onHandleStageNumber: (value: number) => void,
    setStageData: (updatedStageData: IData[]) => void
}

interface IData {
    name: string;
    carPosition: number[]
    clear: boolean;
    quest: IQuest[]
}

interface IQuest {
    id: string;
    position: number[];
    desc?: string;
    clear: boolean;
}


const useGameStore = create<GameStore>((set) => ({
    isStart: false,
    gameState: "READY",
    stageNumber: 0,
    stageData: ORIGIN_STAGE_DATA,
    checkStart: (value: boolean) => set({ isStart: value }),
    setGameState: (value: GameState) => set({ gameState: value}),
    onHandleStageNumber: (value: number) => set({ stageNumber: value }),
    setStageData: (updatedStageData: IData[]) => set({ stageData: updatedStageData })
}));


export default useGameStore