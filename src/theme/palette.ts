import {THEME} from './types'
import {DefaultPaletteOptions} from './defaultPaletteInterface'

type ThemePalette = {
    [p in THEME]: DefaultPaletteOptions
};

const palette : ThemePalette = {
    [THEME.DEFAULT]: {
        primary: {
            main: '#ECBCB3',
            contrastText: '#FFF',
            light: '#eaa89f',
        },
        secondary: {
            main: '#334144',
            contrastText: '#FFF',
            background: '#F2F2F2'
        },
        neutral: {
            main: '#949EA0',
            background: '#F5F6F7',
            light: '#DFE5EA',
            dark: '#D4D8D9'
        },
        success: {
            main: '#5fb760'
        },
        error: {
            main: '#F45050'
        }
    },
    [THEME.BLUE]: {}
}

export default palette