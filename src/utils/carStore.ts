import { create } from "zustand";

type CarStoreState = {
    selectedGearState: 'D' | 'P' | 'R';
    checkParking: boolean;
    setCheckParking: (value: boolean) => void;
    setSelectedGearState: (value: 'D' | 'P' | 'R') => void;
};

const useCarStore = create<CarStoreState>((set) => ({
    selectedGearState: 'D',
    checkParking: false,
    setCheckParking: (value: boolean) => set({ checkParking: value }),
    setSelectedGearState: (value: 'D' | 'P' | 'R') => set({ selectedGearState: value }),
}));

export default useCarStore;
