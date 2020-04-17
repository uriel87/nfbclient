
import { validationErrors } from "../../helpers/errors"
import { checkInvalidEmail, validChars } from "../../helpers/validation"


export default function validation(values) {

    // console.log("validation - values", values)

    let errors = {};

    if (values.name) {
        if (validChars(values.name)) {
            errors.name = validationErrors.NAME_IN_ENGLISH
        }
    }

    if (values.email) {
        if (checkInvalidEmail(values.email)) {
            errors.email = validationErrors.EMAIL_INVALID
        }
    }

    if (values.password) {
        if (values.password.length < 7) {
            errors.password = validationErrors.PASSWORD_MIN
        }
    }

    if (values.tel) {
        if (values.tel.length < 8 || values.tel.length > 13 ) {
            errors.tel = validationErrors.TEL_RANGE
        }
    }

    return errors;   

}