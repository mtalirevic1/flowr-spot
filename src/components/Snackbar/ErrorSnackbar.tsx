import {Alert, Snackbar} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {useEffect} from 'react'
import {hideErrorSnackbar} from '../../redux/slices/uiSlice'

const ErrorSnackbar = () => {
    const dispatch = useDispatch()
    const {isErrorSnackbarOpen, errorMessage} = useSelector((state: RootState) => state.ui)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if(isErrorSnackbarOpen){
            timer = setTimeout(() => {
                dispatch(hideErrorSnackbar())
            }, 3000)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [isErrorSnackbarOpen])

    return (
        <Snackbar open={isErrorSnackbarOpen}>
            <Alert severity='error'>
                {errorMessage}
            </Alert>
        </Snackbar>
    )
}

export default ErrorSnackbar