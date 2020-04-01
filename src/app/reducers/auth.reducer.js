
import { constantAuth } from '../constant'

const initalState = {
    token: null,
    userId: null,
    tokenExpiration: null
}

const authReducer = (state = initalState, action) => {
    switch(action.type) {
        case constantAuth.SET_LOGIN:
            return state = {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                tokenExpiration: action.payload.tokenExpiration
            }
        case constantAuth.SET_LOGOUT:
            return state = {
                token: null,
                userId: null,
                tokenExpiration: null
            }
        default:
            return state;
    }
    
};

export default authReducer;