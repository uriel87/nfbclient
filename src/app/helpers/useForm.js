import { useState, useEffect } from "react";


const UseForm = (callback, validation) => {

    const [inputs, setSignupInputs] = useState({});
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleOnChange = (event) => {
        // console.log("handleOnChange - event.target", event)
        const { name, value, checked } = event.target;
        setSignupInputs({
            ...inputs,
            [name]: value || checked
        })
	};

    const handleOnSubmit = (event) => {
        // console.log("handleOnSubmit - inputs", inputs)
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