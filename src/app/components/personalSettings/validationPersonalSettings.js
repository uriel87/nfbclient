// export default function validation(values) {

//     console.log("validation - values", values)

//     let errors = {};

//     if (values.name) {
//         if (!/^[a-zA-Z\s]*$/
//             .test(values.name)) {
//             errors.name = "Name should have only in English"
//         }
//     }

//     if (values.email) {
//         if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//             .test(values.email)) {
//             errors.email = "Email adress is invalid"
//         }
//     }

//     if (values.password) {
//         if (values.password.length < 7) {
//             errors.password = "Password should be more than 6 characters";
//         }
//     }

//     if (values.tel) {
//         if (!/^[0-9]*$/
//             .test(values.tel)) {
//             errors.tel = "telephone should have only numbers"
//         }
//         else if (values.tel.length < 8 || values.tel.length > 13 ) {
//             errors.tel = "Telephone should be between 7 to 12";
//         }
//     }

//     return errors;   

// }