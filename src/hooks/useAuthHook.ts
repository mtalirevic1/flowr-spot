import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {RootState} from "../redux/store";
import {getUserRequest} from "../service/UserService";
import {login, setLoadingUser} from "../redux/slices/authSlice";

export const useAuthHook = () => {
    const dispatch = useDispatch()
    const {token, user} = useSelector((state: RootState) => state.auth)

    const loginUser = useCallback(() => {
        dispatch(setLoadingUser(true))
        getUserRequest(token).then(user => {
            dispatch(login({token, user}))
            dispatch(setLoadingUser(false))
        }).catch(e => console.log(e))
    }, [token])


    useEffect(() => {
        if (!token || user) return
        loginUser()
    }, [])

}