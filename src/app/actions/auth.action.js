
import { constantAuth } from '../constant'

export function setLogin(auth) {
    return {
        tape: constantAuth.setLogin,
        payload: auth
    }
}


export function setLogout() {
    return {
        type: constantAuth.setLogout,
        payload: auth
    }
}