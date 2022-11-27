import {Components} from '@mui/material'

const components: Components = {
    MuiButtonBase: {
        defaultProps: {
            //disableRipple: true,
        },
    },
    MuiLink: {
        defaultProps: {
            underline: 'hover',
        },
    },
    MuiCardHeader: {
        defaultProps: {
            titleTypographyProps: {
                variant: 'h6',
            },
        },
        styleOverrides: {
            action: {
                marginTop: '-4px',
                marginRight: '-4px',
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: '6px',
                boxShadow:
                    'rgba(50, 50, 93, 0.025) 0px 2px 5px -1px, rgba(0, 0, 0, 0.05) 0px 1px 3px -1px',
                backgroundImage: 'none',
            },
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none',
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: '6px',
            },
        },
    },
}

export default components
