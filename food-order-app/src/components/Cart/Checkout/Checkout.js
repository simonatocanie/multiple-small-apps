import useInput from '../../../hooks/use-input';
import Form from '../../UI/Form/Form';

const isNotEmpty = (value) => value.trim() !== '';
const isLengthEqualToFive = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const {
        value: enteredName,
        hasValueError: hasNameError,
        isValueValid: isNameValid,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurHandler
    } = useInput(isNotEmpty);

    const {
        value: enteredStreet,
        hasValueError: hasStreetError,
        isValueValid: isStreetValid,
        valueChangeHandler: streetChangeHandler,
        valueBlurHandler: streetBlurHandler
    } = useInput(isNotEmpty);

    const {
        value: enteredCity,
        hasValueError: hasCityError,
        isValueValid: isCityValid,
        valueChangeHandler: cityChangeHandler,
        valueBlurHandler: cityBlurHandler
    } = useInput(isNotEmpty);


    const {
        value: enteredPostalCode,
        hasValueError: hasPostalCodeError,
        isValueValid: isPostalCodeValid,
        valueChangeHandler: postalCodeChangeHandler,
        valueBlurHandler: postalCodeBlurHandler
    } = useInput(isLengthEqualToFive);


    const inputs = [
        { id: 'name', type: 'text', label: 'Name', value: enteredName, onChange: nameChangeHandler, onBlur: nameBlurHandler, hasError: hasNameError },
        { id: 'street', type: 'text', label: 'Street', value: enteredStreet, onChange: streetChangeHandler, onBlur: streetBlurHandler, hasError: hasStreetError },
        { id: 'city', type: 'text', label: 'City', value: enteredCity, onChange: cityChangeHandler, onBlur: cityBlurHandler, hasError: hasCityError },
        { id: 'postalCode', type: 'text', label: 'Oostal Code', value: enteredPostalCode, onChange: postalCodeChangeHandler, onBlur: postalCodeBlurHandler, hasError: hasPostalCodeError },
    ]

    const isFormValid = isNameValid && isStreetValid && isCityValid && isPostalCodeValid;
    const userData = {
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!isFormValid) {
            return;
        }
        
        props.onConfirm(userData)
    }

    return (
        <Form inputs={inputs} onSubmit={submitHandler} onCancel={props.onCancel} isFormValid={isFormValid} />
    );
}
export default Checkout;