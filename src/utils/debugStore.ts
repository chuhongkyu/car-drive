import { create } from "zustand";

export type DebugStoreState = {
    debug: boolean;
    setDebug: (value:boolean) => void;
}

const useDebugStore = create<DebugStoreState>((set) => ({
    debug: false,
    setDebug: (value:boolean) => set({ debug: value })
}))

export default useDebugStore;