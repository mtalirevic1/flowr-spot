import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {store} from './redux/store'
import {Provider} from "react-redux"
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Provider store={store}>
                <App/>
            </Provider>
        </LocalizationProvider>
    </React.StrictMode>
)
