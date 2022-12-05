import {Box, Dialog, Typography, useMediaQuery, useTheme} from '@mui/material'
import {IconButtonNoBg, PrimaryButton, TextField} from '../../GlobalStyle'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {setIsLoginModalOpen, setIsLoginSuccessSnackbarOpen, showErrorSnackbar} from '../../redux/slices/uiSlice'
import {NAVBAR_HEIGHT} from '../../constants/layout'
import {useLocation} from 'react-router-dom'
import {ChangeEvent, useEffect, useState} from 'react'
import {loginUserRequest} from '../../service/UserService'
import {login} from '../../redux/slices/authSlice'
import CloseIcon from '@mui/icons-material/Close'

const LoginModal = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'))

    const dispatch = useDispatch()
    const {isLoginModalOpen, isLoginSuccessSnackbarOpen} = useSelector((state: RootState) => state.ui)

    const location = useLocation()
    useEffect(() => {
        dispatch(setIsLoginModalOpen(false))
    }, [location])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) {
            setError(false)
        }
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) {
            setError(false)
        }
        setPassword(e.target.value)
    }

    const handleClose = () => {
        setError(false)
        setEmail('')
        setPassword('')
        dispatch(setIsLoginModalOpen(false))
    }

    const handleSubmit = () => {
        if (!email || !password) {
            setError(true)
            return
        }
        loginUserRequest(email, password).then(({token, user}) => {
            dispatch(login({token, user}))
            setError(false)
            setEmail('')
            setPassword('')
            dispatch(setIsLoginSuccessSnackbarOpen(true))
        }).catch((err: Error) => {
            dispatch(showErrorSnackbar(err.message))
            setError(true)
        })
    }

    return (
        <Dialog
            open={isLoginModalOpen}
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
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: isMobile ? '' : '30px',
                    mt: isMobile ? `calc(${NAVBAR_HEIGHT} + 150px)` : '',
                }}
            >
                <Typography variant="h3" mb="30px" color="secondary">
                    Welcome Back
                </Typography>
                <TextField
                    label="Email Address"
                    sx={{width: '380px', height: '50px', mb: '10px'}}
                    value={email}
                    onChange={handleEmailChange}
                    error={error}
                    disabled={isLoginSuccessSnackbarOpen}
                />
                <TextField
                    label="Password"
                    sx={{width: '380px', height: '50px', mb: '20px'}}
                    value={password}
                    type="password"
                    onChange={handlePasswordChange}
                    error={error}
                    disabled={isLoginSuccessSnackbarOpen}
                />
                <PrimaryButton
                    sx={{width: '380px', height: '50px', mb: '20px'}}
                    onClick={handleSubmit}
                    disabled={isLoginSuccessSnackbarOpen}
                >
                    Login to your Account
                </PrimaryButton>
            </Box>
        </Dialog>
    )
}

export default LoginModal