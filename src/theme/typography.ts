import {TypographyOptions} from '@mui/material/styles/createTypography'

const typography: TypographyOptions = {
    fontFamily: [
        'Ubuntu',
        'sans-serif',
        'Montserrat',
        'sans-serif'
    ].join(','),
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.25,
    },
    h2: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.25,
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.25,
    },
    h4: {
        fontSize: '1.125rem',
        fontWeight: 500,
        lineHeight: 1.25,
    },
    h5: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '14px',
    },
    h6: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.25,
    },
    body1: {
        fontSize: 13,
    },
    button: {
        textTransform: 'none',
    },
}

export default typography
