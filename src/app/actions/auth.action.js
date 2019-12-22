
import { constantAuth } from '../constant'

export function setLogin(auth) {
    return {
        type: constantAuth.setLogin,
        payload: auth
    }
}


export function setLogout() {
    return {
        type: constantAuth.setLogout,
        payload: null
    }
}