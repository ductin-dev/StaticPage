import { createSlice } from '@reduxjs/toolkit';

// Config Instance
export interface MiniGameStateType {
    nickname: string,
    bruh: number,
    levelshoot: number,
    fbtHealth: number,
    fbtMaxHealth: number
};

export const miniGameInitialState: MiniGameStateType = {
    nickname: "Unnamed User",
    bruh: 30,
    levelshoot: 1,
    fbtHealth: 100,
    fbtMaxHealth: 100
};

// Define Slice
export const slice = createSlice({
    name: 'Mini Game',
    initialState: miniGameInitialState,
    reducers: {
        changeNameSuccess: (state, action) => {
            state.nickname = action.payload;
        },
        grantBruhSuccess: (state, action) => {
            state.bruh = state.bruh + action.payload;
        },
        useBruhSuccess: (state, action) => {
            state.bruh = state.bruh - action.payload;
        },
        loseFBTHealthSuccess: (state, action) => {
            state.fbtHealth = state.fbtHealth - action.payload;
        },
        setFBTHealthSuccess: (state, action) => {
            state.fbtHealth = action.payload;
        },
        autoRegenerationFBTHealthSuccess: (state, action) => {
            const { level, grant } = action.payload;
            state.fbtHealth = state.fbtHealth + grant * level;
        },
        upLevelSuccess: (state) => {
            state.levelshoot = state.levelshoot + 1;
            switch (state.levelshoot) {
                case 1: state.fbtMaxHealth = 100;
                    break;
                case 2: state.fbtMaxHealth = 150;
                    break;
                case 3: state.fbtMaxHealth = 225;
                    break;
                case 4: state.fbtMaxHealth = 300;
                    break;
                case 5: state.fbtMaxHealth = 450;
                    break;
            };
            state.fbtHealth = state.fbtMaxHealth;
            state.bruh = state.bruh + state.levelshoot * 8;
        },
        resetGameSuccess: (state, action) => {
            if (action.payload.hardReset) {
                state.bruh = miniGameInitialState.bruh;
            }
            state.levelshoot = miniGameInitialState.levelshoot;
            state.fbtHealth = miniGameInitialState.fbtHealth;
            state.fbtMaxHealth = miniGameInitialState.fbtMaxHealth;
        },
        grantBruhFailure: (state, action) => {
            console.error(action.payload);
        },
        useBruhFailure: (state, action) => {
            console.error(action.payload);
        }
    }
});
