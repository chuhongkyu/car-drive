import { create } from "zustand";

export const localStorageKey = 'CAR_GAME_DATA';

const SAVE_DATA = {
    currentStage: 0,
    recordData :
        [
            {
                name: "stage1",
                unlock: true,
            }
        ]
}

interface IData {
    currentStage: number;
    recordData: ISave[]
}

interface ISave{
    name: string;
    unlock: boolean;
    clearTime?: number;
}

type LocalStore = {
    saveData: IData
    setSaveData: (updatedStageData:IData) => void
}

const useLocalSotre = create<LocalStore>((set) => ({
    saveData: SAVE_DATA,
    setSaveData: (updatedStageData:IData) => {
        localStorage.setItem(localStorageKey, JSON.stringify(updatedStageData));
        set({ saveData: updatedStageData });
    }
}));

export default useLocalSotre