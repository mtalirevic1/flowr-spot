import {FC} from 'react'
import {Typography, useMediaQuery, useTheme} from '@mui/material'

type ProfileInfoProps = {
    title: string
    value: string
}

export const ProfileInfo: FC<ProfileInfoProps> = ({title, value}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'))
    return (
        <div style={{marginLeft: isMobile ? '' : '60px'}}>
            <Typography
                sx={{color: (theme) => theme.palette.neutral.main}}
                fontSize="10px"
            >
                {title}
            </Typography>
            <Typography
                color="secondary"
                fontSize="18px"
            >
                {value}
            </Typography>
        </div>
    )
}