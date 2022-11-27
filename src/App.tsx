import {Provider} from 'react-redux'
import {store} from './redux/store'
import {ThemeProvider} from '@mui/material'
import createTheme from './theme'
import {THEME} from './theme/types'

const App = () => {
    const theme = createTheme(THEME.DEFAULT)
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <p></p>
            </ThemeProvider>
        </Provider>
    )
}

export default App
