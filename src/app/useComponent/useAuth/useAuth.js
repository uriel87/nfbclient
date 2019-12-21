import { useState, useEffect } from "react";


const UseAuth = (callback, validation) => {

    let InitialAuthInputs = {
        email: "",
        password: ""
    }

    const [authInputs, setAuthInputs] = useState(InitialAuthInputs);
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setAuthInputs({
            ...authInputs,
            [name]: value
        })
        console.log("handleOnChange", authInputs)
	};

    const handleOnSubmit = (event) => {
        console.log("handleOnSubmit", authInputs)
        event.preventDefault();
        setErrors(validation(authInputs));
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
        authInputs,
        errors,
    };

}


export default UseAuth;