export default function validation(values) {

    let errors = {};

    console.log("validation - actions", values)

    if (values.name) {
        if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
        .test(values.name)) {
            errors.name = "Name should have only in English characters and numbers"
        }
    }

    if (values.description) {
        if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
        .test(values.description)) {
            errors.description = "Description should have only in English characters and numbers"
        }
    }

    if (values.payments) {
        if(parseInt(values.payments) < 1) {
            errors.payments = "Payments should at list 1 payments";
            console.log("validation - payments", errors.payments)
        }
    }

    return errors;   

}