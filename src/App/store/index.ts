import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import bannerReducer from './bannerSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    banner: bannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;




