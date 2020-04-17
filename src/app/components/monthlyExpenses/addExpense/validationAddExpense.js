

import { validationErrors } from "../../../helpers/errors"
import { validCharsAndNumbers } from "../../../helpers/validation"


export default function validation(values) {

    let errors = {};

    console.log("validation - actions", values)

    if (!values.name) {
        errors.name = validationErrors.REQUIRED_NAME
    } else if(validCharsAndNumbers(values.name)) {
        errors.name = validationErrors.NAME_IN_ENGLISH
    }

    if (!values.description) {
        errors.description = validationErrors.REQUIRED_DESCRIPTION
    } else if(validCharsAndNumbers(values.description)) {
        errors.description = validationErrors.DESCRIPTION_IN_ENGLISH
    }

    if (!values.amount) {
        errors.amount = validationErrors.REQUIRED_AMOUNT
    }

    if (!values.payments || parseInt(values.payments) < 1) {
        errors.payments = validationErrors.PAYMENTS_MIN
    }

    if (!values.category) {
        errors.category = validationErrors.REQUIRED_CATEGORY
    }

    return errors;   

}