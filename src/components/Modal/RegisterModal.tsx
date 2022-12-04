import {Box, Dialog, Typography, useMediaQuery, useTheme} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {useLocation} from 'react-router-dom'
import {ChangeEvent, useEffect, useState} from 'react'
import {setIsRegisterModalOpen} from '../../redux/slices/uiSlice'
import {ErrorTooltip, IconButtonNoBg, PrimaryButton, TextField} from '../../GlobalStyle'
import CloseIcon from '@mui/icons-material/Close'
import {NAVBAR_HEIGHT} from '../../constants/layout'
import {isEmailValid, isPasswordValid} from '../../util/validation'

const RegisterModal = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'))

    const dispatch = useDispatch()
    const {isRegisterModalOpen} = useSelector((state: RootState) => state.ui)

    const location = useLocation()
    useEffect(() => {
        dispatch(setIsRegisterModalOpen(false))
    }, [location])

    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        setHasSubmitted(true)
    }

    const handleClose = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setHasSubmitted(false)
        dispatch(setIsRegisterModalOpen(false))
    }

    return (
        <Dialog
            open={isRegisterModalOpen}
            onClose={handleClose}
            fullScreen={isMobile}
            sx={{
                zIndex: isMobile ? 8 : 11,
            }}
            PaperProps={{
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: isMobile ? 8 : 11,
                    overflow: 'clip'
                }
            }}
        >
            {!isMobile &&
                <IconButtonNoBg
                    sx={{
                        position: 'absolute',
                        top: '13px',
                        right: '13px',
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon
                        fontSize="large"
                        sx={{
                            color: (theme) => theme.palette.neutral.main,
                        }}
                    />
                </IconButtonNoBg>}
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
                    Create an Account
                </Typography>
                <Box>
                    <ErrorTooltip
                        title="Please enter your name"
                        placement={isMobile ? 'top' : 'left'}
                        open={hasSubmitted && !firstName}
                    >
                        <TextField
                            label="First Name"
                            sx={{width: '185px', height: '50px', mb: '10px', mr: '10px'}}
                            value={firstName}
                            onChange={handleFirstNameChange}
                            error={hasSubmitted && !firstName}
                        />
                    </ErrorTooltip>
                    <ErrorTooltip
                        title="Please enter your last name"
                        placement={isMobile ? 'top' : 'right'}
                        open={hasSubmitted && !lastName}
                    >
                        <TextField
                            label="Last Name"
                            sx={{width: '185px', height: '50px', mb: '10px'}}
                            value={lastName}
                            onChange={handleLastNameChange}
                            error={hasSubmitted && !lastName}
                        />
                    </ErrorTooltip>
                </Box>
                <ErrorTooltip
                    title="Please enter a valid Email Address"
                    placement={isMobile ? 'bottom' : 'right'}
                    open={hasSubmitted && !isEmailValid(email)}
                >
                    <TextField
                        label="Email Address"
                        sx={{width: '380px', height: '50px', mb: '10px'}}
                        value={email}
                        onChange={handleEmailChange}
                        error={hasSubmitted && !isEmailValid(email)}
                    />
                </ErrorTooltip>
                <ErrorTooltip
                    title="A valid password has to contain at least 8 characters, 1 digit, 1 lower case letter, 1 upper case letter and 1 special character"
                    placement={isMobile ? 'bottom' : 'right'}
                    open={hasSubmitted && !isPasswordValid(password)}
                >
                    <TextField
                        label="Password"
                        sx={{width: '380px', height: '50px', mb: '20px'}}
                        value={password}
                        type="password"
                        onChange={handlePasswordChange}
                        error={hasSubmitted && !isPasswordValid(password)}
                    />
                </ErrorTooltip>
                <PrimaryButton
                    sx={{width: '380px', height: '50px', mb: '20px'}}
                    onClick={handleSubmit}
                >
                    Create Account
                </PrimaryButton>
            </Box>
        </Dialog>
    )
}

export default RegisterModal