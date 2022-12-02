import {CssBaseline, ThemeProvider} from '@mui/material'
import createTheme from './theme'
import {THEME} from './theme/types'
import {RouterProvider} from 'react-router-dom'
import {router} from './router/routes'
import {useAuthHook} from "./hooks/useAuthHook";

const App = () => {
    const theme = createTheme(THEME.DEFAULT)
    useAuthHook()
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

export default App
