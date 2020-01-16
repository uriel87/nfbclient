import { constantUser } from "../constant";


export function setUser(user) {
    //console.log("setUser - user:", user)

    return {
        type: constantUser.setUser,
        payload: user
    };
}


export function setUserBalance(user) {
    //console.log("setUserBalance - user:", user)

    return {
        type: constantUser.setUserBalance,
        payload: user
    };
}