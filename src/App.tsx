import {Provider} from 'react-redux'
import {store} from './redux/store'
import {CssBaseline, ThemeProvider} from '@mui/material'
import createTheme from './theme'
import {THEME} from './theme/types'
import Layout from "./components/Layout";

const App = () => {
    const theme = createTheme(THEME.DEFAULT)
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Layout/>
            </ThemeProvider>
        </Provider>
    )
}

export default App
