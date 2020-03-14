
import { constantAuth } from '../constant'

const initalState = {
    token: null,
    userId: null,
    tokenExpiration: null
}

const authReducer = (state = initalState, action) => {
    console.log("authReducer inputs", action)

    switch(action.type) {
        
        case constantAuth.setLogin:
            return state = {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                tokenExpiration: action.payload.tokenExpiration
            }
        case constantAuth.setLogout:
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