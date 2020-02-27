export default function validation(values) {

    let errors = {};

    console.log("validation - actions", values)

    if (!values.name) {
        errors.name = "Name is requierd";
    } else if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
        .test(values.name)) {
        errors.name = "Name should have only in English characters and numbers"
    }

    if (!values.description) {
        errors.description = "Description is requierd";
    } else if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
        .test(values.description)) {
        errors.description = "Description should have only in English characters and numbers"
    }

    if (!values.amount) {
        errors.amount = "Amount is requierd";
    }

    if (!values.payments || parseInt(values.payments) < 1) {
        errors.payments = "Payments should at list 1 payment";
        console.log("validation - payments", errors.payments)
    }

    if (!values.category) {
        errors.category = "Please select category";
        console.log("validation - category", errors.category)
    }

    return errors;   

}