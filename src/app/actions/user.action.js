import { constantUser } from "../constant";


export function setUser(user) {
    return {
        type: constantUser.setUser,
        payload: user
    };
}


// export function setUserBalance(user) {
//     return {
//         type: constantUser.setUserBalance,
//         payload: user
//     };
// }