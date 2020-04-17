
import { validationErrors } from "../../../helpers/errors"
import { validCharsAndNumbers } from "../../../helpers/validation"


export default function validation(values) {

    let errors = {};

    // console.log("validation - actions", values) 

    if (values.name) {
        if (validCharsAndNumbers(values.name)) {
            errors.name = validationErrors.NAME_IN_ENGLISH
        }
    }

    if (values.description) {
        if (validCharsAndNumbers(values.description)) {
            errors.description = validationErrors.DESCRIPTION_IN_ENGLISH
        }
    }

    if (values.payments) {
        if(parseInt(values.payments) < 1) {
            errors.payments = validationErrors.PAYMENTS_MIN
        }
    }

    return errors;   

}