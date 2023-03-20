import { Dispatch } from 'react';

import { slice } from '../slice/UserSlice';

const { setDataSuccess, clearDataSuccess } = slice.actions;

type DispatchUserType = {
    payload: any, // Base on DTO, Model,...
    type: string,
};

export const setData = (data: any) => async (dispatch: Dispatch<DispatchUserType>) => {
    try {
        return dispatch(setDataSuccess({ data }));
    } catch (e) {
    };
};

export const clearData = () => async (dispatch: Dispatch<DispatchUserType>) => {
    try {
        return dispatch(clearDataSuccess({}));
    } catch (e) {
    };
};







