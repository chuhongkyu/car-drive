import { create } from 'zustand'
import { ORIGIN_STAGE_DATA } from './stageData';
import { Vector3 } from 'three';

type GameState = "READY" | "START" | "SUCCESS" | "GAMEOVERAD" | "GAMEOVER"
type CameraType = "FOCUS" | "ALL" | "VIEW"

type GameStore = {
    isStart: boolean;
    gameState: GameState
    stageNumber: number;
    stageData: IData[]
    cameraType: CameraType;
    clearTimer: number;
    setClearTimer: (value: number) => void,
    setCameraType: (value: CameraType) => void,
    checkStart: (value: boolean) => void,
    setGameState: (value: GameState) => void,
    onHandleStageNumber: (value: number) => void,
    setStageData: (updatedStageData: IData[]) => void
}

export interface IData {
    name: string;
    carDirection: string;
    carPosition: number[];
    quest: IQuest[];
}

interface IQuest {
    id: string;
    position: number[];
    desc?: string;
    clear: boolean;
}

const useGameStore = create<GameStore>((set) => ({
    isStart: false,
    checkStart: (value: boolean) => set({ isStart: value }),

    gameState: "READY",
    setGameState: (value: GameState) => set({ gameState: value}),

    cameraType: "ALL",
    setCameraType : (value: CameraType) => set({ cameraType: value }),

    clearTimer: 0,
    setClearTimer: (value: number) => set({ clearTimer: value }),
    
    stageNumber: 0,
    onHandleStageNumber: (value: number) => set({ stageNumber: value }),

    stageData: ORIGIN_STAGE_DATA,
    setStageData: (updatedStageData: IData[]) => {
        set({ stageData: updatedStageData });
    }
}));

export default useGameStore