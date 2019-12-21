
import { constantAuth } from '../constant'

initalState = {
    token: null,
    userId: null
}

const authReducer = (state = initalState, action) => {
    switch(action.type) {
        case constantAuth.setLogin:
            return state = {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId
            }
        case constantAuth.setLogout:
            return state = {
                token: null,
                userId: null
            }
        default:
            return state;
    }
};

export default authReducer;