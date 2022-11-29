import {AppBar, Stack, Toolbar, Typography} from "@mui/material";
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <AppBar elevation={0} position='fixed' sx={{backgroundColor: 'white'}}>
            <Toolbar variant='dense' sx={{height: '80px'}}>
                <Stack direction='row' spacing={3} flexGrow={1} alignItems='center'>
                    <img alt='logo' src={Logo}/>
                    <Typography variant='h2' color='primary'>
                        FlowrSpot
                    </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar