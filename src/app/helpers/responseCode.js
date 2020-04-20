


export const responseCode = (code) => {

    switch(code) {
        case 0:
            return "Email adress is not exsit"
        case 1:
            return "Email was sent"
        case 2:
            return "invalid credentials"
        case 3:
            return "ok"
        case 4:
            return "user exsits already"
        default:
    }
    
}

