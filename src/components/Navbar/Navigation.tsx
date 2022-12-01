import NavDrawer from './NavDrawer'
import {useState} from 'react'
import {Stack} from '@mui/material'
import {IconButton} from './Style'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navigation = () => {
    const [navDrawerOpen, setNavDrawerOpened] = useState(false)
    return (
        <>
            <Stack direction="row" spacing={10} alignItems="center">
                <IconButton onClick={() => setNavDrawerOpened(opened => !opened)}>
                    {navDrawerOpen ?
                        <CloseIcon fontSize='large' sx={{color: (theme) => theme.palette.neutral.main}}/>
                        : <MenuIcon fontSize='large' sx={{color: (theme) => theme.palette.neutral.main}}/>

                    }
                </IconButton>
            </Stack>
            <NavDrawer open={navDrawerOpen}/>
        </>
    )
}

export default Navigation