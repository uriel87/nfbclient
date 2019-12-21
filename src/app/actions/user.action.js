import { constantUser } from "../constant";


export function setUser(user) {
    return {
        type: constantUser.setUser,
        payload: user
    };
}