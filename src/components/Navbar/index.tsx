import {AppBar, Button, ButtonBase, Link, Stack, Toolbar, useMediaQuery, useTheme} from "@mui/material"
import Logo from '../../assets/logo.svg'
import NavMenu from './NavMenu'
import {NAVBAR_HEIGHT} from '../../constants/layout'
import {useSelector} from "react-redux"
import {RootState} from "../../redux/store"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const isNotDesktop = useMediaQuery(theme.breakpoints.between('xs', 'md'))
    const {isNavDrawerOpen} = useSelector((state: RootState) => state.ui)
    return (
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    boxShadow: isNotDesktop && !isNavDrawerOpen
                        ? '0px 15px 30px rgba(0, 0, 0, 0.05)' : '',
                    backgroundColor: 'white',
                }}>
                <Toolbar variant="dense" sx={{height: NAVBAR_HEIGHT, m: '0 8px 0 8px'}}>
                    <Stack direction="row" spacing={3} flexGrow={1} alignItems="center">
                        <ButtonBase
                            onClick={() => navigate('/')}
                            disableRipple
                            sx={{'&:hover': {background: 0}}}
                        >
                            <img alt="logo" src={Logo} style={{userSelect: "none"}}/>
                        </ButtonBase>
                        <Link
                            variant="h3"
                            fontWeight={700}
                            fontFamily="Montserrat"
                            color="primary"
                            underline="none"
                            component={Button}
                            disableRipple
                            sx={{'&:hover': {background: 0}}}
                            onClick={() => navigate('/')}
                        >
                            FlowrSpot
                        </Link>
                    </Stack>
                    <NavMenu/>
                </Toolbar>
            </AppBar>
    )
}

export default Navbar