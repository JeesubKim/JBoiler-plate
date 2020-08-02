import Axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER
} from './types'

export function loginUser(dataToSubmit) {
    const request = Axios.post('/api/v1/users/login',dataToSubmit)
        .then(resp=>{
            return resp.data;
        })


        return {
            type:LOGIN_USER,
            payload:request
        }
}


export function registerUser(dataToSubmit) {
    const request = Axios.post('/api/v1/users/register',dataToSubmit)
    .then(resp=>{
        return resp.data;
    })


    return {
        type:REGISTER_USER,
        payload:request
    }
}