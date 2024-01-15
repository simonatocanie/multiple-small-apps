import { useReducer } from "react";

const defaultValue = {
    value: '',
    isTouched: false
}
const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched }
    }

    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true }
    }
    return defaultValue;
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, defaultValue);

    const valueChangedHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    }
    const valueBlurHandler = (event) => {
        dispatch({ type: 'BLUR' });
    }

    let isValueValid = validateValue(inputState.value);
    let hasValueError = !isValueValid & inputState.isTouched;

    return {
        value: inputState.value,
        isValueValid,
        hasValueError,
        valueChangedHandler,
        valueBlurHandler
    }
}

export default useInput;