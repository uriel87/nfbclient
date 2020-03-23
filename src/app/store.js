import { createStore, combineReducers } from "redux";
import user from "./reducers/user.reducer";
import auth from "./reducers/auth.reducer";
// import lightBox from "./reducers/lightBox.reducer";



export default createStore(
    combineReducers({
        user,
        auth
    })
);