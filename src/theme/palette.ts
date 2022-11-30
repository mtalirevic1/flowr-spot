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
            light: '#EAA79E'
        },
        secondary: {
            main: '#1e19bd',
            contrastText: '#FFF',
            light: '#49e1f2',
            background: '#1976D2'
        },
        neutral: {
            main: '#949EA0',
            background: '#DFE5EA',
            light: '#D4D8D9',
        },
        success: {
            main: '#5fb760'
        },
        error: {
            main: '#f16460'
        }
    },
    [THEME.BLUE]: {}
}

export default palette