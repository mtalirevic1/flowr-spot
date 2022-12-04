import {Alert, Button, Snackbar} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {setIsLoginModalOpen, setIsRegistrationSuccessSnackbarOpen} from '../../redux/slices/uiSlice'

const RegistrationSuccessSnackbar = () => {
    const dispatch = useDispatch()
    const {isRegistrationSuccessSnackbarOpen} = useSelector((state: RootState) => state.ui)

    const handleOkPress = () => {
        dispatch(setIsRegistrationSuccessSnackbarOpen(false))
        dispatch(setIsLoginModalOpen(true))
    }

    return (
        <Snackbar open={isRegistrationSuccessSnackbarOpen}>
            <Alert severity="success"
                   action={
                       <Button
                           color='success'
                           onClick={handleOkPress}
                       >
                           OK
                       </Button>
                   }
            >
                Congratulations! You have successfully signed up for FlowrSpot!
            </Alert>
        </Snackbar>
    )
}

export default RegistrationSuccessSnackbar