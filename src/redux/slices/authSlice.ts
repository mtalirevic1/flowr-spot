import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from '../../model/user'
import {getToken, setToken} from "../../util/localStorage"

type AuthState = {
    token: string
    isLoggedIn: boolean
    user: undefined | User
    isLoadingUser: boolean
}

const initAuthState: AuthState = {
    token: getToken(),
    isLoggedIn: false,
    user: undefined,
    isLoadingUser: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string, user: User }>) => {
            const {token, user} = action.payload
            state.token = token
            setToken(token)
            state.isLoggedIn = true
            state.user = user
        },
        logout: (state) => {
            state.token = ''
            setToken('')
            state.isLoggedIn = false
            state.user = undefined
        },
        setIsLoadingUser: (state, action: PayloadAction<boolean>) => {
            state.isLoadingUser = action.payload
        },
    }
})

export const {
    login,
    logout,
    setIsLoadingUser,
} = authSlice.actions

export default authSlice.reducer