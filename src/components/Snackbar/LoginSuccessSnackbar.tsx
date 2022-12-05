import {Alert, Button, Snackbar, Stack} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {setIsLoginModalOpen, setIsLoginSuccessSnackbarOpen, setIsProfileModalOpen} from '../../redux/slices/uiSlice'

const LoginSuccessSnackbar = () => {
    const dispatch = useDispatch()
    const {isLoginSuccessSnackbarOpen} = useSelector((state: RootState) => state.ui)

    const handleOkPress = () => {
        dispatch(setIsLoginModalOpen(false))
        dispatch(setIsLoginSuccessSnackbarOpen(false))
    }

    const handleProfilePress = () => {
        handleOkPress()
        dispatch(setIsProfileModalOpen(true))
    }

    return (
        <Snackbar open={isLoginSuccessSnackbarOpen}>
            <Alert severity="success"
                   action={
                       <Stack spacing={2} direction='row'>
                           <Button
                               color="success"
                               onClick={handleOkPress}
                           >
                               OK
                           </Button>
                           <Button
                               color="success"
                               onClick={handleProfilePress}
                           >
                               PROFILE
                           </Button>
                       </Stack>
                   }
            >
                Congratulations! You have successfully signed up for FlowrSpot!
            </Alert>
        </Snackbar>
    )
}

export default LoginSuccessSnackbar