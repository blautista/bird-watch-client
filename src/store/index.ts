import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import birdsReducer from '../features/birds/birdSlice';

export const store = configureStore({
  reducer: {
    birds: birdsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
