export default function validation(values) {

    console.log("validation - actions", values)

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

    if (!values.category) {
        errors.category = "Please select Category";
    }

    if (!values.priority) {
        errors.priority = "Please select Priority";
    }

    if (!values.startTime) {
        errors.startTime = "Please select Start time";
    }

    if (!values.endTime) {
        errors.endTime = "Please select End time";
    }

    console.log("validation: ", errors)




    return errors;

}