import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type AuthState = {
    isLoggedIn: boolean
}

const initAuthState: AuthState = {
    isLoggedIn: false
}

export const authState = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const {
    setIsLoggedIn
} = authState.actions

export default authState.reducer