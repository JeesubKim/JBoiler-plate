import Axios from 'axios'
import {
    LOGIN_USER
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