export default function validation(values) {

    console.log("validationAddIncomes - actions", values)

    let errors = {};

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

    console.log("validation: ", errors)

    return errors;

}