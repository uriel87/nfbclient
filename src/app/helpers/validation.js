
module.exports = {
    checkInvalidEmail: (email)  => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(email)) {
            return true
        } else {return false}
    },
    validCharsAndNumbers: (input)  => {
        console.log("validCharsAndNumbers", input)
        if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
            .test(input)) {
            return true
        } else {return false}
    },
    validChars: (input)  => {
        if (!/^[a-zA-Z\s]*$/
            .test(input)) {
            return true
        } else {return false}
    }
}
