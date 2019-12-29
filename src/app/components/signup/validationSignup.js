export default function validation(values) {

    let errors = {};

    if (!values.name) {
        errors.name = "name is requierd";
        console.log("validation - name", errors.name)
    } else if (!/^[a-zA-Z\s]*$/
    .test(values.name)) {
    errors.name = "Name should have only in English"
    console.log("validation - name", errors.name)
    }

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

    if (!values.tel) {
        errors.tel = "telephone is requierd";
        console.log("validation - telephone", errors.tel)

    }
    else if (!/^[0-9]*$/
        .test(values.tel)) {
        errors.tel = "telephone should have only numbers"
        console.log("validation - telephone", errors.tel)
    }
    else if (values.tel.length < 8 || values.tel.length > 13 ) {
        errors.tel = "Telephone should be between 7 to 12";
        console.log("validation - telephone", errors.tel)
    }

    return errors;   

}