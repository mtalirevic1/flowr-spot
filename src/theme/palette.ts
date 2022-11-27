import {THEME} from './types'
import {DefaultPaletteOptions} from './defaultPaletteInterface'

type ThemePalette = {
    [p in THEME]: DefaultPaletteOptions
};

const palette : ThemePalette = {
    [THEME.DEFAULT]: {
        primary: {
            main: '#0045AC',
            contrastText: '#FFF',
            light: '#1976D2'
        },
        secondary: {
            main: '#1e19bd',
            contrastText: '#FFF',
            light: '#49e1f2',
            background: '#1976D2'
        },
        neutral: {
            main: '#767676',
            light: '#EFEFEF',
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