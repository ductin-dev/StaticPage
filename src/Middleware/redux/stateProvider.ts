import { CombinedState, combineReducers, Reducer } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './reducer/UserReducer';
import MiniGameReducer from './reducer/MiniGameReducer';
import { MiniGameStateType } from './slice/MiniGameSlice';
import { UserStateType } from './slice/UserSlice';

export interface RootStateType {
    miniGameReducer: MiniGameStateType;
    userReducer: UserStateType;
}

// Config
const persistConfig = {
    key: 'user-store',
    storage
};

// Combine Reducer
const reducers: Reducer<CombinedState<RootStateType>> = combineReducers({
    miniGameReducer: MiniGameReducer,
    userReducer: UserReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);

// Init Store
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export type DispatchType = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;