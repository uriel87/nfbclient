import { useState, useEffect } from "react";


const UseSignup = (callback, validation) => {

    let InitialSignupInputs = {
        name: "",
        email: "",
        password: "",
        tel:""
    }

    const [signupInputs, setSignupInputs] = useState(InitialSignupInputs);
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setSignupInputs({
            ...signupInputs,
            [name]: value
        })
        // console.log("handleOnChange", signupInputs)
	};

    const handleOnSubmit = (event) => {
        // console.log("handleOnSubmit", signupInputs)
        event.preventDefault();
        setErrors(validation(signupInputs));
        setIsSubmitted(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
			callback();
        }
    }, [errors])

    return {
        handleOnChange,
        handleOnSubmit,
        signupInputs,
        errors,
    };

}


export default UseSignup;