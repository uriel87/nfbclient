import { useState, useEffect } from "react";


const UseForm = (callback, validation) => {

    const [inputs, setSignupInputs] = useState({});
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setSignupInputs({
            ...inputs,
            [name]: value
        })
        // console.log("handleOnChange", UseForm)
	};

    const handleOnSubmit = (event) => {
        // console.log("handleOnSubmit", UseForm)
        event.preventDefault();
        setErrors(validation(inputs));
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
        inputs,
        errors,
    };

}

export default UseForm;