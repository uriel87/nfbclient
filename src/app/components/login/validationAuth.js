import { validationErrors } from "../../helpers/errors"
import { checkInvalidEmail } from "../../helpers/validation"

export default function validation(values) {

    let errors = {};

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

    return errors;

}