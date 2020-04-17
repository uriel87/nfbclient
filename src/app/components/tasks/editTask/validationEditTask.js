
import { validationErrors } from "../../../helpers/errors"
import { validCharsAndNumbers } from "../../../helpers/validation"


export default function validation(values) {

    console.log("validation - actions", values)

    let errors = {};

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

    return errors;

}
    