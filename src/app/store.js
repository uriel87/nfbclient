import { createStore, applyMiddleware, combineReducers } from "redux";
import user from "./reducers/user.reducer";
import auth from "./reducers/auth.reducer";


export default createStore(
    combineReducers({
        user,
        auth
    })
);