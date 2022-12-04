import {Drawer, List, Typography} from "@mui/material"
import {ListItemText, ListItemButton, ButtonContainer} from './Style'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {NAVBAR_HEIGHT} from '../../constants/layout'
import {setIsLoginModalOpen, setIsNavDrawerOpen, setIsRegisterModalOpen} from "../../redux/slices/uiSlice"
import {PrimaryButton} from '../../GlobalStyle'

const NavDrawer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoggedIn, user} = useSelector((state: RootState) => state.auth)
    const {isNavDrawerOpen} = useSelector((state: RootState) => state.ui)

    const handleNavClick = (path: string) => {
        navigate(path)
        dispatch(setIsNavDrawerOpen(false))
    }

    const handleLoginClick = () => {
        dispatch(setIsNavDrawerOpen(false))
        dispatch(setIsLoginModalOpen(true))
    }

    const handleRegisterClick = () => {
        dispatch(setIsNavDrawerOpen(false))
        dispatch(setIsRegisterModalOpen(true))
    }

    const handleUserClick = () => {
        dispatch(setIsNavDrawerOpen(false))
    }

    return (
        <Drawer
            open={isNavDrawerOpen}
            variant="temporary"
            anchor="right"
        >
            <List
                sx={{
                    width: {
                        xs: '100vw',
                        sm: '50vw',
                        md: '50vw',
                        lg: 0,
                        xl: 0
                    },
                    mt: `calc(${NAVBAR_HEIGHT} + 100px)`,
                }}>
                <ListItemButton onClick={() => handleNavClick('/flowers')}>
                    <ListItemText primary={<Typography variant="h5" color="neutral">Flowers</Typography>}/>
                </ListItemButton>
                <ListItemButton onClick={() => handleNavClick('/sightings')}>
                    <ListItemText primary={<Typography variant="h5" color="neutral">Latest Sightings</Typography>}/>
                </ListItemButton>
                {isLoggedIn && user &&
                    <>
                        <ListItemButton onClick={() => handleNavClick('/favorites')}>
                            <ListItemText primary={<Typography variant="h5" color="neutral">Favorites</Typography>}/>
                        </ListItemButton>
                        <ListItemButton onClick={() => handleNavClick('/settings')}>
                            <ListItemText primary={<Typography variant="h5" color="neutral">Settings</Typography>}/>
                        </ListItemButton>
                        <ListItemButton onClick={handleUserClick}>
                            <ListItemText
                                primary={
                                    <Typography variant="h5" color="neutral">
                                        {`${user.first_name} ${user.last_name}`}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </>
                }
                {!isLoggedIn &&
                    <>
                        <ListItemButton onClick={handleLoginClick}>
                            <ListItemText primary={<Typography variant="h5" color="primary">Login</Typography>}/>
                        </ListItemButton>
                        <ButtonContainer>
                            <PrimaryButton
                                sx={{
                                    width: '140px',
                                    height: '40px',
                                    borderRadius: '50px',
                                }}
                                onClick={handleRegisterClick}>
                                <Typography variant='h5'>
                                    New Account
                                </Typography>
                            </PrimaryButton>
                        </ButtonContainer>
                    </>
                }
            </List>
        </Drawer>
    )
}

export default NavDrawer