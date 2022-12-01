import {Provider} from 'react-redux'
import {store} from './redux/store'
import {CssBaseline, ThemeProvider} from '@mui/material'
import createTheme from './theme'
import {THEME} from './theme/types'
import {RouterProvider} from 'react-router-dom'
import {router} from './router/routes'

const App = () => {
    const theme = createTheme(THEME.DEFAULT)
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
    )
}

export default App
