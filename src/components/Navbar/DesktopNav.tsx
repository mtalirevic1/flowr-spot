import {Avatar, Button, ButtonBase, Link, Skeleton, Stack, Typography} from "@mui/material"
import {
    setIsLoginModalOpen,
    setIsNavDrawerOpen,
    setIsProfileModalOpen,
    setIsRegisterModalOpen
} from "../../redux/slices/uiSlice"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../redux/store"
import AvatarImage from "../../assets/avatarPic.png"
import {PrimaryButton} from '../../GlobalStyle'

const DesktopNav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoggedIn, user, isLoadingUser} = useSelector((state: RootState) => state.auth)

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
        dispatch(setIsProfileModalOpen(true))
    }

    return (
        <Stack direction="row" spacing={15} alignItems="center">
            <Link
                component={Button}
                underline="none"
                variant="h5"
                sx={{color: (theme) => theme.palette.neutral.main}}
                onClick={() => handleNavClick('/flowers')}
            >
                Flowers
            </Link>
            <Link
                component={Button}
                underline="none"
                variant="h5"
                sx={{color: (theme) => theme.palette.neutral.main}}
                onClick={() => handleNavClick('/sightings')}
            >
                Latest Sightings
            </Link>
            {isLoadingUser &&
                <Stack direction="row" spacing={5} alignItems="center">
                    <Skeleton width={150} height={30} variant="rounded"/>
                    <Skeleton width={40} height={40} variant="circular"/>
                </Stack>
            }
            {isLoggedIn && user && !isLoadingUser &&
                <>
                    <Link
                        component={Button}
                        underline="none"
                        variant="h5"
                        sx={{color: (theme) => theme.palette.neutral.main}}
                        onClick={() => handleNavClick('/favorites')}
                    >
                        Favorites
                    </Link>
                    <Stack direction="row" alignItems="center">
                        <Link
                            component={Button}
                            underline="none"
                            variant="h5"
                            sx={{color: (theme) => theme.palette.neutral.main}}
                            onClick={handleUserClick}
                        >
                            {`${user.first_name} ${user.last_name}`}
                        </Link>
                        <ButtonBase onClick={handleUserClick}>
                            <Avatar
                                alt={`${user.first_name} ${user.last_name}`}
                                src={AvatarImage}
                                sx={{width: '40px', height: '40px', ml: '20px'}}

                            />
                        </ButtonBase>
                    </Stack>
                </>
            }
            {!isLoggedIn && !isLoadingUser &&
                <div>
                    <Link
                        component={Button}
                        underline="none"
                        variant="h5"
                        onClick={handleLoginClick}
                        mr="22px"
                    >
                        Login
                    </Link>
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
                </div>
            }
        </Stack>
    )
}

export default DesktopNav