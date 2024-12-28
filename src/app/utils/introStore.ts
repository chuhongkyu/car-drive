import { create } from "zustand";

type IntroState = {
    introClear: boolean;
    setIntroClear: (value: boolean) => void;
};

const useIntroStore = create<IntroState>((set) => ({
    introClear: false,
    setIntroClear: (value: boolean) => set({ introClear: value })
}));

export default useIntroStore;
