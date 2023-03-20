import { createSlice } from '@reduxjs/toolkit';

// Config Instance
export interface UserStateType {
    data: null,
}

export const userInitialState: UserStateType = {
    data: null,
};

// Define Slice
export const slice = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers: {
        setDataSuccess: (state, action) => {
            state.data = action.payload;
        },
        clearDataSuccess: (state, action) => {
            state.data = userInitialState.data;
        }
    },
});
