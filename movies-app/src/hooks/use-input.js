import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueChangedHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    const valueBlurHandler = (event) => {
        setIsTouched(true);
    }

    let isValueValid = validateValue(enteredValue);
    let hasValueError = !isValueValid & isTouched;

    return {
        value: enteredValue,
        isValueValid,
        hasValueError,
        valueChangedHandler,
        valueBlurHandler
    }
}

export default useInput;