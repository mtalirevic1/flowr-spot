import {CssBaseline, ThemeProvider} from '@mui/material'
import createTheme from './theme'
import {THEME} from './theme/types'
import {RouterProvider} from 'react-router-dom'
import {router} from './router/routes'
import {useAuth} from "./hooks/useAuth";
import LoginModal from './components/Modal/LoginModal'

const App = () => {
    const theme = createTheme(THEME.DEFAULT)
    useAuth()
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
            <LoginModal/>
        </ThemeProvider>
    )
}

export default App
