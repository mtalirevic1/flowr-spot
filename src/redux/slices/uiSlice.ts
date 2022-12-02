import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type UiState = {
    isNavDrawerOpen: boolean
    isLoginModalOpen: boolean
    isRegisterModalOpen: boolean
}

const initUiState: UiState = {
    isNavDrawerOpen: false,
    isLoginModalOpen: false,
    isRegisterModalOpen: false
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
        },
        setIsRegisterModalOpen: (state, action: PayloadAction<boolean>) =>{
            state.isRegisterModalOpen = action.payload
        },
    }
})

export const {
    setIsRegisterModalOpen,
    setIsLoginModalOpen,
    setIsNavDrawerOpen
} = uiSlice.actions

export default uiSlice.reducer