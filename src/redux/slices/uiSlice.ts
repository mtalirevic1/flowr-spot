import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type UiState = {
    isNavDrawerOpen: boolean
    isLoginModalOpen: boolean
    isRegisterModalOpen: boolean
    isProfileModalOpen: boolean
    isSettingsModalOpen: boolean
    errorMessage: string
    isErrorSnackbarOpen: boolean
    isRegistrationSuccessSnackbarOpen: boolean
    isLoginSuccessSnackbarOpen: boolean
}

const initUiState: UiState = {
    isNavDrawerOpen: false,
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    isProfileModalOpen: false,
    isSettingsModalOpen: false,
    errorMessage: '',
    isErrorSnackbarOpen: false,
    isRegistrationSuccessSnackbarOpen: false,
    isLoginSuccessSnackbarOpen: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initUiState,
    reducers: {
        setIsNavDrawerOpen: (state, action: PayloadAction<boolean>) =>{
            state.isNavDrawerOpen = action.payload
        },
        setIsLoginModalOpen: (state, action: PayloadAction<boolean>) =>{
            state.isLoginModalOpen = action.payload
            if(action.payload){
                state.isRegisterModalOpen = false
                state.isProfileModalOpen = false
                state.isSettingsModalOpen = false
            }
        },
        setIsRegisterModalOpen: (state, action: PayloadAction<boolean>) =>{
            state.isRegisterModalOpen = action.payload
            if(action.payload){
                state.isLoginModalOpen = false
                state.isProfileModalOpen = false
                state.isSettingsModalOpen = false
            }
        },
        setIsProfileModalOpen: (state, action: PayloadAction<boolean>) =>{
            state.isProfileModalOpen = action.payload
            if(action.payload){
                state.isLoginModalOpen = false
                state.isRegisterModalOpen = false
                state.isSettingsModalOpen = false
            }
        },
        setIsSettingsModalOpen: (state, action: PayloadAction<boolean>) =>{
            state.isSettingsModalOpen = action.payload
            if(action.payload){
                state.isLoginModalOpen = false
                state.isRegisterModalOpen = false
                state.isProfileModalOpen = false
            }
        },
        showErrorSnackbar: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload
            state.isErrorSnackbarOpen = true
        },
        hideErrorSnackbar: (state) => {
            state.isErrorSnackbarOpen = false
        },
        setIsRegistrationSuccessSnackbarOpen: (state, action: PayloadAction<boolean>) => {
            state.isRegistrationSuccessSnackbarOpen = action.payload
        },
        setIsLoginSuccessSnackbarOpen: (state, action: PayloadAction<boolean>) => {
            state.isLoginSuccessSnackbarOpen = action.payload
        },
    }
})

export const {
    setIsRegisterModalOpen,
    setIsLoginModalOpen,
    setIsSettingsModalOpen,
    setIsProfileModalOpen,
    setIsNavDrawerOpen,
    showErrorSnackbar,
    hideErrorSnackbar,
    setIsRegistrationSuccessSnackbarOpen,
    setIsLoginSuccessSnackbarOpen
} = uiSlice.actions

export default uiSlice.reducer