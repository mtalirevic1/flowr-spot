import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from '../../model/user'
import {getToken} from "../../util/localStorage";

type AuthState = {
    token: string
    isLoggedIn: boolean
    user: undefined | User
    loadingUser: boolean
    userError: string
}

const initAuthState: AuthState = {
    token: getToken(),
    isLoggedIn: false,
    user: undefined,
    loadingUser: false,
    userError: ''
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
        logout: (state) => {
            state.token = ''
            state.isLoggedIn = false
            state.user = undefined
        },
        setLoadingUser: (state, action: PayloadAction<boolean>) => {
            state.loadingUser = action.payload
        },
        setUserError: (state, action: PayloadAction<string>) => {
            state.userError = action.payload
        }
    }
})

export const {
    login,
    logout,
    setLoadingUser,
    setUserError
} = authSlice.actions

export default authSlice.reducer