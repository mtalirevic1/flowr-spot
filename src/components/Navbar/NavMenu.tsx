import NavDrawer from './NavDrawer'
import {Stack, useMediaQuery, useTheme} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setIsNavDrawerOpen} from "../../redux/slices/uiSlice";
import DesktopNav from "./DesktopNav";
import {IconButtonNoBg} from '../../GlobalStyle'

const NavMenu = () => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
    const dispatch = useDispatch()
    const {isNavDrawerOpen} = useSelector((state: RootState) => state.ui)
    return (
        <>
            {!isDesktop &&
                <Stack direction="row" spacing={10} alignItems="center">
                    <IconButtonNoBg onClick={() => dispatch(setIsNavDrawerOpen(!isNavDrawerOpen))}>
                        {isNavDrawerOpen ?
                            <CloseIcon fontSize='large' sx={{color: (theme) => theme.palette.neutral.main}}/>
                            : <MenuIcon fontSize='large' sx={{color: (theme) => theme.palette.neutral.main}}/>

                        }
                    </IconButtonNoBg>
                </Stack>}
            {isDesktop ? <DesktopNav/> : <NavDrawer/>}
        </>
    )
}

export default NavMenu