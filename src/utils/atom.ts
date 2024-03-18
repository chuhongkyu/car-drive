import { atom } from 'recoil';

export const debugAtom = atom({
    key: "debug",
    default: false
})

export const onStartScene = atom({
    key: 'isStart',
    default: false,
});

export const onGameStart = atom({
    key: 'game',
    default: false,
});