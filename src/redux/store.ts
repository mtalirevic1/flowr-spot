import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import authSlice from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch);