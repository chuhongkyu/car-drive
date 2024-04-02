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

export const currentStageNumber = atom({
    key: 'stageNumber',
    default: 0,
});

export const stageData = atom({
    key: 'stageData',
    default: [
        {
            name: "stage1",
            clear: false,
            quest: [
                {
                    id: '001',
                    clear: false,
                },
                {
                    id: '002',
                    clear: false,
                },
                {
                    id: '003',
                    clear: false,
                }
            ]
        },
        {
            name: "stage2",
            clear: false,
            quest: [
                {
                    id: '001',
                    clear: false,
                },
                {
                    id: '002',
                    clear: false,
                },
                {
                    id: '003',
                    clear: false,
                }
            ]
        }
    ]
})