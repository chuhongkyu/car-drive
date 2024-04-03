import { atom } from 'recoil';

export const debugAtom = atom({
    key: "debug",
    default: false
})

export const introStart = atom({
    key: "introStart",
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
                    desc: "Park the car in the parking area and change the gear shift to 'P'.",
                    clear: false,
                },
                {
                    id: '002',
                    desc: "Come back to the starting point.",
                    clear: false,
                },
                // {
                //     id: '003',
                //     clear: false,
                // }
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


export const selectedGearState = atom({
    key: 'selectedGearState', // 고유한 상태의 key
    default: 'D', // 기본값 설정
});

export const checkParking = atom({
    key: 'checkParking',
    default: false
})