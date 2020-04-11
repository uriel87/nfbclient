

import { validationErrors } from "../../helpers/errors"
import { checkInvalidEmail } from "../../helpers/validation"


export default function validation(values) {

    let errors = {};

    if (!values.name) {
        errors.name = validationErrors.REQUIRED_EMAIL
    } else if (!/^[a-zA-Z\s]*$/
        .test(values.name)) {
        errors.name = validationErrors.NAME_IN_ENGLISH
    }

    if (!values.email) {
        errors.email = validationErrors.REQUIRED_EMAIL
    } else if (checkInvalidEmail(values.email)) {
        errors.email = validationErrors.EMAIL_INVALID
    }

    if (!values.password) {
        errors.password = validationErrors.REQUIRED_PASSWORD
    }
    else if (values.password.length < 7) {
        errors.password = validationErrors.PASSWORD_MIN
    }

    if (!values.tel) {
        errors.tel = validationErrors.REQUIRED_TEL
    }

    else if (values.tel.length < 8 || values.tel.length > 13 ) {
        errors.tel = validationErrors.TEL_RANGE
    }

    return errors;   

}