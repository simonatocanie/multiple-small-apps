import { useState } from "react";


const useInput = (validate, initialValue= '') => {
    const [value, setValue] = useState(initialValue !==''?  initialValue : '' );
    const [isTouched, setIsTouched] = useState(false);

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const valueBlurHandler = () => {
        setIsTouched(true);
    }

    const isValueValid = validate(value);
    const hasValueError = !isValueValid && isTouched;

    return {
        value,
        hasValueError,
        isValueValid,
        valueChangeHandler,
        valueBlurHandler
    }
}

export default useInput;