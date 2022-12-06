import axios from 'axios'
import {User, UserRegistration} from '../model/user'
import {AuthResponse} from "../model/authResponse"
import {Flower} from '../model/flower'

axios.defaults.baseURL = "https://flowrspot-api.herokuapp.com/api/v1"
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const axiosInstance = axios.create()

export const getFlowersRequest = async (search: string): Promise<Flower[]> => {
    try{
        const apiPath = search? `/flowers/search?query=${search}` : '/flowers'
        const res = await axiosInstance.get(apiPath)
        return res.data.flowers
    } catch (e) {
        const errorString = 'Unable to load flowers'
        if (axios.isAxiosError(e)) {
            throw new Error(e.response ? e.response.data.error : errorString)
        } else {
            throw new Error(errorString)
        }
    }
}

export const registerUserRequest = async (user: UserRegistration): Promise<string> => {
    try {
        const res = await axiosInstance.post('/users/register', user)
        return res.data.auth_token
    } catch (e) {
        const errorString = 'Unable to register'
        if (axios.isAxiosError(e)) {
            throw new Error(e.response ? e.response.data.error : errorString)
        } else {
            throw new Error(errorString)
        }
    }
}

export const getUserRequest = async (token: string): Promise<User> => {
    const config = {headers: {Authorization: token}}
    try {
        const userRes = await axiosInstance.get('/users/me', config)
        const {first_name, last_name, id} = userRes.data.user
        return {first_name, last_name, id}
    } catch (e) {
        const errorString = 'Unable to get user data'
        if (axios.isAxiosError(e)) {
            throw new Error(e.response ? e.response.data.error : errorString)
        } else {
            throw new Error(errorString)
        }
    }
}

export const loginUserRequest = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const res = await axiosInstance.post('/users/login', {email, password})
        const user = await getUserRequest(res.data.auth_token)
        return {token: res.data.auth_token, user}
    } catch (e) {
        const errorString = 'Unable to login'
        if (axios.isAxiosError(e)) {
            throw new Error(e.response ? e.response.data.error : errorString)
        } else {
            throw new Error(errorString)
        }
    }
}

/*export const refreshTokenRequest = async (token: string): Promise<AuthResponse> => {
    try{

    }catch (e)
}*/