import {PaletteOptions, SimplePaletteColorOptions} from '@mui/material';

interface NeutralPaletteColorOptions extends SimplePaletteColorOptions{
    background?: string;
}

interface SecondaryPaletteColorOptions extends SimplePaletteColorOptions{
    background?: string;
}

export interface DefaultPaletteOptions extends PaletteOptions {
    primary?: SimplePaletteColorOptions
    secondary?: SecondaryPaletteColorOptions
    neutral?: NeutralPaletteColorOptions
}
