import {AppBar, Stack, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material"
import Logo from '../../assets/logo.svg'
import Navigation from './Navigation'
import {NAVBAR_HEIGHT} from '../../constants/layout'

const Navbar = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'))
    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                boxShadow: isMobile ? '0px 15px 30px rgba(0, 0, 0, 0.05)' : '',
                backgroundColor: 'white',
            }}>
            <Toolbar variant="dense" sx={{height: NAVBAR_HEIGHT, m: '0 8px 0 8px'}}>
                <Stack direction="row" spacing={3} flexGrow={1} alignItems="center">
                    <img alt="logo" src={Logo} style={{userSelect: "none"}}/>
                    <Typography fontSize="20px" fontWeight={700} fontFamily="Montserrat" color="primary">
                        FlowrSpot
                    </Typography>
                </Stack>
                <Navigation/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar