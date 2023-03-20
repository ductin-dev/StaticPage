import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { RootStateType, DispatchType } from '@middleware/redux/stateProvider';

export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;