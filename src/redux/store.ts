import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import authSlice from './slices/authSlice';
import uiSlice from "./slices/uiSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        ui: uiSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch);