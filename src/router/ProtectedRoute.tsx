import {FC} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import {
    Navigate,
} from 'react-router-dom'

type ProtectedRouteProps = {
    redirectPath: string
    outlet: JSX.Element
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({redirectPath, outlet}) => {
    const {isLoggedIn} = useSelector((state: RootState) => state.auth)
    if (isLoggedIn) {
        return outlet
    }
    return <Navigate to={{pathname: redirectPath}} replace/>
    }