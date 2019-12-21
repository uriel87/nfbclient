import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import user from "./reducers/user.reducer";


export default createStore(
    combineReducers({
        user
    })
);