
import { constantAuth } from '../constant'

const initalState = {
    token: null,
    userId: null,
    tokenEcpiration: null
}

const authReducer = (state = initalState, action) => {

    console.log("authReducer - action.payload", action.payload)

    switch(action.type) {
        
        case constantAuth.setLogin:
            return state = {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                tokenEcpiration: action.payload.tokenEcpiration
            }
        case constantAuth.setLogout:
            return state = {
                token: null,
                userId: null,
                tokenEcpiration: null
            }
        default:
            return state;
    }
    
};

export default authReducer;