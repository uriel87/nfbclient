
import { constantAuth } from '../constant'


export function setLogin(auth) {
    return {
        type: constantAuth.SET_LOGIN,
        payload: auth
    }
}


export function setLogout() {
    return {
        type: constantAuth.SET_LOGOUT,
        payload: null
    }
}