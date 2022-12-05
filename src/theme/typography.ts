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
        fontSize: '40px',
        fontWeight: 300,
        lineHeight: '40px',
    },
    h2: {
        fontSize: '25px',
        fontWeight: 600,
        lineHeight: '25px',
    },
    h3: {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '20px',
    },
    h4: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '12px',
    },
    h5: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '14px',
    },
    h6: {
        fontSize: '13px',
        fontWeight: 400,
        lineHeight: '13px',
    },
    body1: {
        fontSize: 13,
    },
    button: {
        textTransform: 'none',
    },
}

export default typography
