import {createTheme as createMuiTheme} from '@mui/material'
import breakpoints from './breakpoints'
import typography from './typography'
import components from './components'
import {THEME} from './types'
import palette from './palette'
import shadows from './shadows'

const createTheme = (name: THEME) => {
    let themePalette = palette[name]

    if (!themePalette) {
        console.warn(new Error(`The theme ${name} is not valid`))
        themePalette = palette[THEME.DEFAULT]
    }

    return createMuiTheme(
        {
            spacing: 4,
            breakpoints: breakpoints,
            components: components,
            typography: typography,
            shadows: shadows,
            palette: themePalette,
        },
        {
            name,
        },
    )
}

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary']
    }
    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary']
    }
    interface PaletteColor {
        background?: string
    }


}

export default createTheme