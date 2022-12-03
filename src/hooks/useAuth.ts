import {useDispatch, useSelector} from "react-redux";
import {useCallback, useLayoutEffect} from "react";
import {RootState} from "../redux/store";
import {getUserRequest} from "../service/UserService";
import {login, setIsLoadingUser} from "../redux/slices/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch()
    const {token, user} = useSelector((state: RootState) => state.auth)

    const loginUser = useCallback(() => {
        dispatch(setIsLoadingUser(true))
        getUserRequest(token).then(user => {
            dispatch(login({token, user}))
            dispatch(setIsLoadingUser(false))
        }).catch(e => console.log(e))
    }, [token])


    useLayoutEffect(() => {
        if (!token || user) return
        loginUser()
    }, [])

}