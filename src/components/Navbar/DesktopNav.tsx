import {Avatar, Button, Link, Stack} from "@mui/material";
import {PrimaryButton} from "./Style";
import {setIsNavDrawerOpen} from "../../redux/slices/uiSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import AvatarImage from "../../assets/avatarPic.png";

const DesktopNav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoggedIn, user} = useSelector((state: RootState) => state.auth)

    const handleNavClick = (path: string) => {
        navigate(path)
        dispatch(setIsNavDrawerOpen(false))
    }

    const handleLoginClick = () => {
        dispatch(setIsNavDrawerOpen(false))
    }

    const handleRegisterClick = () => {
        dispatch(setIsNavDrawerOpen(false))
    }

    const handleUserClick = () => {
        dispatch(setIsNavDrawerOpen(false))
    }

    return (
        <Stack direction="row" spacing={15} alignItems="center">
            <Link
                component={Button}
                underline='none'
                variant='h5'
                sx={{color: (theme) => theme.palette.neutral.main}}
                onClick={() => handleNavClick('/flowers')}
            >
                Flowers
            </Link>
            <Link
                component={Button}
                underline='none'
                variant='h5'
                sx={{color: (theme) => theme.palette.neutral.main}}
                onClick={() => handleNavClick('/sightings')}
            >
                Latest Sightings
            </Link>
            {isLoggedIn && user &&
                <>
                    <Link
                        component={Button}
                        underline='none'
                        variant='h5'
                        sx={{color: (theme) => theme.palette.neutral.main}}
                        onClick={() => handleNavClick('/favorites')}
                    >
                        Favorites
                    </Link>
                <Stack direction='row' alignItems='center'>
                    <Link
                        component={Button}
                        underline='none'
                        variant='h5'
                        sx={{color: (theme) => theme.palette.neutral.main}}
                        onClick={handleUserClick}
                    >
                        {`${user.first_name} ${user.last_name}`}
                    </Link>
                    <Avatar
                        alt={`${user.first_name} ${user.last_name}`}
                        src={AvatarImage}
                        sx={{width: '40px', height: '40px', ml: '20px'}}
                    />
                </Stack>
                </>
            }
            {!isLoggedIn &&
                <div>
                    <Link
                        component={Button}
                        underline='none'
                        variant='h5'
                        onClick={handleLoginClick}
                        mr='22px'
                    >
                        Login
                    </Link>
                    <PrimaryButton variant='contained' onClick={handleRegisterClick}>
                        New Account
                    </PrimaryButton>
                </div>
            }
        </Stack>
    )
}

export default DesktopNav