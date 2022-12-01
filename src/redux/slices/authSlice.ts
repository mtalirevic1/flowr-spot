import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from '../../model/user'

type AuthState = {
    token: string
    isLoggedIn: boolean
    user: undefined | User
}

const initAuthState: AuthState = {
    token: '',
    isLoggedIn: false,
    user: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string, user: User }>) => {
            const {token, user} = action.payload
            state.token = token
            state.isLoggedIn = true
            state.user = user
        },
        logout: (state) =>{
            state.token = ''
            state.isLoggedIn = false
            state.user = undefined
        }
    }
})

export const {
    login,
    logout
} = authSlice.actions

export default authSlice.reducer