import {Box, BoxProps, useMediaQuery, useTheme} from '@mui/material'

const Grid = (props: BoxProps) => {
    const theme = useTheme()
    const xs = useMediaQuery(theme.breakpoints.only('xs'))
    const sm = useMediaQuery(theme.breakpoints.only('sm'))
    const md = useMediaQuery(theme.breakpoints.only('md'))
    const lg = useMediaQuery(theme.breakpoints.only('lg'))
    const xl = useMediaQuery(theme.breakpoints.only('xl'))

    const calculateTemplateColumns = () =>{
        if(xs) return '50% 50%'
        if(sm) return '50% 50%'
        if(md) return '33.33% 33.33% 33.33%'
        if(lg) return '25% 25% 25% 25%'
        if(xl) return '20% 20% 20% 20% 20%'
    }

    const calculateGridRowGap = () =>{
        if(xs) return '15px'
        if(sm) return '15px'
        if(md) return '15px'
        if(lg) return '20px'
        if(xl) return '20px'
    }

    return (
        <Box
            {...props}
            sx={{
                display: 'grid',
                gridTemplateColumns: calculateTemplateColumns(),
                rowGap: '20px',
                columnGap: calculateGridRowGap(),
                ...props.sx
            }}
        >

        </Box>
    )
}

export default Grid