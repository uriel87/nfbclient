export default function validation(values) {

    let errors = {};

    if (!values.email) {
        errors.email = "email address is requierd";
        console.log("validation - email", errors.email)

    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(values.email)) {
        errors.email = "Email adress is invalid"
        console.log("validation - email", errors.email)
    }

    if (!values.password) {
        errors.password = "password is requierd";
        console.log("validation - password", errors.password)

    }
    else if (values.password.length < 7) {
        errors.password = "Password should be more than 6 characters";
        console.log("validation - password", errors.password)
    }

    return errors;

}