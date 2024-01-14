import { useContext } from 'react';
import useInput from '../../../hooks/use-input';
import Modal from '../../UI/Modal/Modal';
import Form from '../../UI/Form/Form';
import MoviesContext from '../../../store/movies-context';

const isNotEmpty = value => value.trim() !== '';

const NewMovie = () => {
    var ctxMovie = new useContext(MoviesContext);

    const {
        value: enteredTitle,
        isValueValid: isTitleValid,
        hasValueError: hasTitleError,
        valueChangedHandler: titleChangedHandler,
        valueBlurHandler: titleBlurHandler
    } = useInput(isNotEmpty);

    const {
        value: enteredReleaseDate,
        isValueValid: isReleaseDateValid,
        hasValueError: hasReleaeDateError,
        valueChangedHandler: releaseDateChangeHandler,
        valueBlurHandler: releaseDateBlurHandler
    } = useInput(isNotEmpty);

    const {
        value: enteredDescription,
        isValueValid: isDescriptionValid,
        hasValueError: hasDescrionError,
        valueChangedHandler: descriptionChangeHandler,
        valueBlurHandler: descriptionBlurHandler
    } = useInput(isNotEmpty);

    let isFormValid = isTitleValid && isReleaseDateValid && isDescriptionValid;

    const submitHandler = (event) => {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }

        ctxMovie.addMovie({ title: enteredTitle, releaseDate: enteredReleaseDate, openingText: enteredDescription });
    }

    const hideModalHandler = (event) => {
        event.preventDefault();
        ctxMovie.showModal(false);
    }

    const inputs = [
        { id: 'title', type: 'text', label: 'Title', value: enteredTitle, onChange: titleChangedHandler, onBlur: titleBlurHandler, hasError: hasTitleError },
        { id: 'releaseDate', type: 'date', label: 'Release date', value: enteredReleaseDate, onChange: releaseDateChangeHandler, onBlur: releaseDateBlurHandler, hasError: hasReleaeDateError },
        { id: 'description', type: 'textarea', label: 'Description', rows: '5', value: enteredDescription, onChange: descriptionChangeHandler, onBlur: descriptionBlurHandler, hasError: hasDescrionError }
    ]

    return (
        <Modal onHideModal={hideModalHandler}>
            <Form title="New movie" formInputs={inputs} onSubmit={submitHandler} onHide={hideModalHandler} isSubmitDisabled={!isFormValid} />
        </Modal>
    )
}

export default NewMovie;