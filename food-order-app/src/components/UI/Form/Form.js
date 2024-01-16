import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import classes from './Form.module.css';

const Form = (props) => {

    const content = props.inputs.map(item => {
        return <Input key={item.id} type={item.type} id={item.id} label={item.label} value={item.value} onChange={item.onChange}
            onBlur={item.onBlur} hasError={item.hasError} className='form-control' />
    })

    return (
        <form onSubmit={props.onSubmit}>
            {content}
            <div className={classes.actions}>
                <Button className='btn btn-secondary' type='button' label='Close' onClick={props.onCancel} />
                <Button className='btn btn-success' type='submit' label='Confirm' />
            </div>
            {!props.isFormValid && <p className='text text-danger text-center'>The value entered are not valid</p>}
        </form>
    );
}
export default React.memo(Form);