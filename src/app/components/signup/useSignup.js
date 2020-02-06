// import { useState, useEffect } from "react";


// const UseSignup = (callback, validation) => {

//     // let InitialSignupInputs = {
//     //     name: "",
//     //     email: "",
//     //     password: "",
//     //     tel:""
//     // }

//     const [inputs, setSignupInputs] = useState({});
//     const [errors, setErrors] = useState({})
//     const [isSubmitted, setIsSubmitted] = useState(false)

//     const handleOnChange = (event) => {
//         const { name, value } = event.target;
//         setSignupInputs({
//             ...inputs,
//             [name]: value
//         })
//         // console.log("handleOnChange", signupInputs)
// 	};

//     const handleOnSubmit = (event) => {
//         // console.log("handleOnSubmit", signupInputs)
//         event.preventDefault();
//         setErrors(validation(inputs));
//         setIsSubmitted(true);
//     }

//     useEffect(() => {
//         if (Object.keys(errors).length === 0 && isSubmitted) {
// 			callback();
//         }
//     }, [errors])

//     return {
//         handleOnChange,
//         handleOnSubmit,
//         inputs,
//         errors,
//     };

// }


// export default UseSignup;