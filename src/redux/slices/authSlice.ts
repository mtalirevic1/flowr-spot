import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from '../../model/user'
import {getToken} from "../../util/localStorage";

type AuthState = {
    token: string
    isLoggedIn: boolean
    user: undefined | User
    isLoadingUser: boolean
    userError: string
}

const initAuthState: AuthState = {
    token: getToken(),
    isLoggedIn: false,
    user: undefined,
    isLoadingUser: false,
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
        setIsLoadingUser: (state, action: PayloadAction<boolean>) => {
            state.isLoadingUser = action.payload
        },
        setUserError: (state, action: PayloadAction<string>) => {
            state.userError = action.payload
        }
    }
})

export const {
    login,
    logout,
    setIsLoadingUser,
    setUserError
} = authSlice.actions

export default authSlice.reducer