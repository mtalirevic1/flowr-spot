import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type AuthState = {
    token: string
    isLoggedIn: boolean
}

const initAuthState: AuthState = {
    token: '',
    isLoggedIn: false
}

export const authState = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string }>) => {
            const {token} = action.payload
            state.token = token
            state.isLoggedIn = true
        },
        logout: (state) =>{
            state.token = ''
            state.isLoggedIn = false
        }
    }
})

export const {
    login
} = authState.actions

export default authState.reducer