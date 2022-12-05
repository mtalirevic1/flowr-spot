import {FC} from 'react'
import {Typography} from '@mui/material'

type ProfileInfoProps = {
    title: string
    value: string
}

export const ProfileInfo: FC<ProfileInfoProps> = ({title, value}) => {
    return (
        <div>
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