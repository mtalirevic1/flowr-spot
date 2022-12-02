import {Dialog, DialogContent, DialogTitle} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {setIsLoginModalOpen} from '../../redux/slices/uiSlice'

const LoginModal = () => {
    const dispatch = useDispatch()
    const {isLoginModalOpen} = useSelector((state: RootState) => state.ui)
    const handleClose = () => {
        dispatch(setIsLoginModalOpen(false))
    }

    return (
        <Dialog open={isLoginModalOpen} onClose={handleClose}>
            <DialogTitle variant='h3'>
                Welcome Back
            </DialogTitle>
            <DialogContent>

            </DialogContent>
        </Dialog>
    )
}

export default LoginModal