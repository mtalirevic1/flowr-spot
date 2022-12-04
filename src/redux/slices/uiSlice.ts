import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type UiState = {
    isNavDrawerOpen: boolean
    isLoginModalOpen: boolean
    isRegisterModalOpen: boolean
    errorMessage: string
    isErrorSnackbarOpen: boolean
}

const initUiState: UiState = {
    isNavDrawerOpen: false,
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    errorMessage: '',
    isErrorSnackbarOpen: false
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
            }
        },
        setIsRegisterModalOpen: (state, action: PayloadAction<boolean>) =>{
            state.isRegisterModalOpen = action.payload
            if(action.payload){
                state.isLoginModalOpen = false
            }
        },
        showErrorSnackbar: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload
            state.isErrorSnackbarOpen = true
        },
        hideErrorSnackbar: (state) => {
            state.isErrorSnackbarOpen = false
        }
    }
})

export const {
    setIsRegisterModalOpen,
    setIsLoginModalOpen,
    setIsNavDrawerOpen,
    showErrorSnackbar,
    hideErrorSnackbar
} = uiSlice.actions

export default uiSlice.reducer