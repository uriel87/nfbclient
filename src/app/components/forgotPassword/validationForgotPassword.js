



import { validationErrors } from "../../helpers/errors"
import { checkInvalidEmail } from "../../helpers/validation"


export default function validation(values) {

    let errors = {};

    if (!values.email) {
        errors.email = validationErrors.REQUIRED_EMAIL
    } else if (checkInvalidEmail(values.email)) {
        errors.email = validationErrors.EMAIL_INVALID
    }

    return errors;   

}