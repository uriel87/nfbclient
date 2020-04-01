import { constantUser } from "../constant";


export function setUser(user) {
    return {
        type: constantUser.SET_USER,
        payload: user
    };
}


// export function setUserBalance(user) {
//     return {
//         type: constantUser.setUserBalance,
//         payload: user
//     };
// }