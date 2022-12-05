import {Avatar, Box, Dialog, Skeleton, Stack, Typography, useMediaQuery, useTheme} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {setIsProfileModalOpen} from '../../redux/slices/uiSlice'
import {IconButtonNoBg, PrimaryButton} from '../../GlobalStyle'
import CloseIcon from '@mui/icons-material/Close'
import {NAVBAR_HEIGHT} from '../../constants/layout'
import AvatarImage from '../../assets/avatarPic.png'
import {ProfileInfo} from './Style'
import {logout} from '../../redux/slices/authSlice'

const ProfileModal = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'))

    const dispatch = useDispatch()
    const {isProfileModalOpen} = useSelector((state: RootState) => state.ui)
    const {user} = useSelector((state: RootState) => state.auth)

    const location = useLocation()
    useEffect(() => {
        dispatch(setIsProfileModalOpen(false))
    }, [location])

    const handleClose = () => {
        dispatch(setIsProfileModalOpen(false))
    }

    const handleLogoutClick = () => {
        dispatch(logout())
        handleClose()
    }

    return (
        <Dialog
            open={isProfileModalOpen}
            onClose={handleClose}
            fullScreen={isMobile}
            sx={{
                zIndex: isMobile ? 8 : 11,
            }}
            PaperProps={{
                sx: {
                    display: 'flex', alignItems: 'center',
                    zIndex: isMobile ? 8 : 11,
                    overflow: 'clip'
                }
            }}
        >
            {!isMobile &&
                <IconButtonNoBg
                    sx={{position: 'absolute', top: '13px', right: '13px',}}
                    onClick={handleClose}
                >
                    <CloseIcon
                        fontSize="large"
                        sx={{color: (theme) => theme.palette.neutral.main,}}
                    />
                </IconButtonNoBg>
            }
            <Stack
                sx={{
                    p: isMobile ? '' : '60px',
                    mt: isMobile ? `calc(${NAVBAR_HEIGHT} + 70px)` : '',
                }}
            >
                <Box mr="150px">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Stack direction="row" spacing={7} mb="40px" alignItems="center">
                            {user ?
                                <Avatar
                                    src={AvatarImage}
                                    alt={`${user.first_name} ${user.last_name}`}
                                    sx={{width: '80px', height: '80px'}}
                                />
                                : <Skeleton width="80px" height="80px" variant="circular"/>
                            }
                            <Stack spacing={2}>
                                {user ?
                                    <>
                                        <Typography variant="h2" color="secondary" fontWeight={300} noWrap>
                                            {`${user.first_name} ${user.last_name}`}
                                        </Typography>
                                        <Typography variant="h6" sx={{color: (theme) => theme.palette.neutral.main}}>
                                            {`47 Sightings`}
                                        </Typography>
                                    </>
                                    : <Skeleton width="150px" height="30px" variant="rounded"/>
                                }
                            </Stack>
                        </Stack>
                    </Box>
                    {user &&
                        <Stack spacing={6} ml='5px'>
                            <ProfileInfo title="First Name" value={user.first_name}/>
                            <ProfileInfo title="Last Name" value={user.last_name}/>
                            <ProfileInfo title="Date of Birth" value="Feb 25, 1998"/>
                            <ProfileInfo title="Email Address" value={'anon@anon.com'}/>
                        </Stack>}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <PrimaryButton
                        sx={{width: '150px', height: '50px', mt: '70px'}}
                        onClick={handleLogoutClick}
                    >
                        Logout
                    </PrimaryButton>
                </Box>
            </Stack>
        </Dialog>
    )
}

export default ProfileModal