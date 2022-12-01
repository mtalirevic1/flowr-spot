import {FC} from 'react'
import {Drawer, List, Typography} from "@mui/material"
import {ListItemText, ListItemButton} from './Style'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {NAVBAR_HEIGHT} from '../../constants/layout'

type NavDrawerProps = {
    open: boolean
}

const NavDrawer: FC<NavDrawerProps> = ({open}) => {
    const navigate = useNavigate()
    const {isLoggedIn, user} = useSelector((state: RootState) => state.auth)
    return (
        <Drawer
            open={open}
            variant="temporary"
            anchor="right"
        >
            <List
                sx={{
                    width: '100vw',
                    mt: `calc(${NAVBAR_HEIGHT} + 100px)`,
                }}>
                <ListItemButton onClick={() => navigate('/flowers')}>
                    <ListItemText primary={<Typography variant="h5" color="neutral">Flowers</Typography>}/>
                </ListItemButton>
                <ListItemButton onClick={() => navigate('/sightings')}>
                    <ListItemText primary={<Typography variant="h5" color="neutral">Latest Sightings</Typography>}/>
                </ListItemButton>
                {isLoggedIn && user &&
                    <>
                        <ListItemButton onClick={() => navigate('/favorites')}>
                            <ListItemText primary={<Typography variant="h5" color="neutral">Favorites</Typography>}/>
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('/settings')}>
                            <ListItemText primary={<Typography variant="h5" color="neutral">Settings</Typography>}/>
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('/favorites')}>
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

                    </>
                }
            </List>
        </Drawer>
    )
}

export default NavDrawer