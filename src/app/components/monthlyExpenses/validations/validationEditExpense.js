
import { validationErrors } from "../../../helpers/errors"


export default function validation(values) {

    let errors = {};

    // console.log("validation - actions", values)

    if (values.name) {
        if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
        .test(values.name)) {
            errors.name = validationErrors.NAME_IN_ENGLISH
        }
    }

    if (values.description) {
        if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
        .test(values.description)) {
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