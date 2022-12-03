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
    }
})

export const {
    setIsRegisterModalOpen,
    setIsLoginModalOpen,
    setIsNavDrawerOpen
} = uiSlice.actions

export default uiSlice.reducer