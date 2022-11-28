import axios from 'axios'
import {User} from '../model/user'

axios.defaults.baseURL = "https://flowrspot-api.herokuapp.com/api/v1"
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const axiosInstance = axios.create()

export const registerUserMutation = async (user: User) => {
    try {
        const res = await axiosInstance.post('/users/register', user)
        if (res.status >= 300) return {errorMsg: res.data.error}
        return {token: res.data.auth_token}
    } catch (e) {
        console.log("USER REGISTRATION ERROR: ", e)
        return {errorMsg: 'Unable to register user...'}
    }
}

export const loginUserMutation = async (email: string, password: string) => {
    try{
        const res = await axiosInstance.post('/users/login', {email, password})
        if (res.status >= 300) return {errorMsg: res.data.error}
        return {token: res.data.auth_token}
    } catch (e) {
        console.log("USER LOGIN ERROR: ", e)
        return {errorMsg: 'Unable to log in...'}
    }
}