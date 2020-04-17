

import { validationErrors } from "../../../helpers/errors"
import { validCharsAndNumbers } from "../../../helpers/validation"


export default function validation(values) {

    // console.log("validation - actions", values)

    let errors = {};

    if (!values.name) {
        errors.name = validationErrors.REQUIRED_NAME
    } else if (validCharsAndNumbers(values.name)) {
        errors.name = validationErrors.NAME_IN_ENGLISH
    }

    if (!values.description) {
        errors.description = validationErrors.REQUIRED_DESCRIPTION
    } else if (validCharsAndNumbers(values.description)) {
        errors.description = validationErrors.DESCRIPTION_IN_ENGLISH
    }

    if (!values.category) {
        errors.category = validationErrors.REQUIRED_CATEGORY
    }

    if (!values.priority) {
        errors.priority = validationErrors.REQUIRED_PRIORITY
    }

    if (!values.startTime) {
        errors.startTime = validationErrors.REQUIRED_START_TIME
    }

    if (!values.endTime) {
        errors.endTime = validationErrors.REQUIRED_END_TIME
    }




    return errors;

}