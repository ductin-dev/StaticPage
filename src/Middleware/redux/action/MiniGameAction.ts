import { slice } from '../slice/MiniGameSlice';
import { DispatchType } from '../stateProvider';

const { grantBruhSuccess, useBruhSuccess,
    grantBruhFailure, useBruhFailure,
    changeNameSuccess, loseFBTHealthSuccess,
    upLevelSuccess, resetGameSuccess,
    setFBTHealthSuccess, autoRegenerationFBTHealthSuccess } = slice.actions;

export const grantBruh = (amount: number, dispatch: DispatchType) => {
    try {
        return dispatch(grantBruhSuccess(amount));
    } catch (e) {
        return dispatch(grantBruhFailure({ e }));
    };
};

export const useBruh = (cost: number, dispatch: DispatchType) => {
    try {
        return dispatch(useBruhSuccess(cost));
    } catch (e) {
        return dispatch(useBruhFailure({ e }));
    };
};

export const changeName = (name: string, dispatch: DispatchType) => {
    try {
        return dispatch(changeNameSuccess(name));
    } catch (e) {
    };
};

export const loseFBTHealth = (amount: number, dispatch: DispatchType) => {
    try {
        return dispatch(loseFBTHealthSuccess(amount));
    } catch (e) {
    };
};

export const upLevel = (dispatch: DispatchType) => {
    try {
        return dispatch(upLevelSuccess());
    } catch (e) {
    };
};

export const setFBTHealth = (value: number, dispatch: DispatchType) => {
    try {
        return dispatch(setFBTHealthSuccess(value));
    } catch (e) {
    };
};

export const autoReGenerationFBTHealth = (level: number, grant: number, dispatch: DispatchType) => {
    try {
        return dispatch(autoRegenerationFBTHealthSuccess({ level, grant }));
    } catch (e) {
    };
};

export const resetGame = (hardReset: boolean, dispatch: DispatchType) => {
    try {
        return dispatch(resetGameSuccess({ hardReset }));
    } catch (e) {
    };
};



