import axios from 'axios'
import {User} from '../model/user'
import {AuthResponse} from "../model/authResponse";

axios.defaults.baseURL = "https://flowrspot-api.herokuapp.com/api/v1"
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const axiosInstance = axios.create()

export const registerUserRequest = async (user: User): Promise<string> => {
    const res = await axiosInstance.post('/users/register', user)
    if (res.status >= 300) throw new Error('Unable to register user')
    return res.data.auth_token
}

export const getUserRequest = async (token: string): Promise<User> => {
    const config = {headers: {Authorization: token}}
    const userRes = await axiosInstance.get('/users/me', config)
    if (userRes.status >= 300) throw new Error("Unable to get user data")
    const {first_name, last_name} = userRes.data.user
    return {first_name, last_name}
}

export const loginUserRequest = async (email: string, password: string): Promise<AuthResponse> => {
    const res = await axiosInstance.post('/users/login', {email, password})
    if (res.status >= 300) throw new Error(res.data.error)
    const user = await getUserRequest(res.data.auth_token)
    return {token: res.data.auth_token, user}
}

/*export const refreshTokenRequest = async (token: string): Promise<AuthResponse> => {
    try{

    }catch (e)
}*/