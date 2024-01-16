import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let classeNames = props.className !== '' ? classes[props.className] : classes['form-control'];
    
    if (props.hasError)
        classeNames += classes['invalid'];
    const isInput = props.type === 'text' || props.type === 'date' || props.type === 'password' || props.type === 'number';

    return (
        <>
            <div className={classes['form-group']}>
                <label htmlFor={props.id} >{props.label}</label>
                {isInput &&
                    <input
                        id={props.id}
                        className={classeNames}
                        type={props.type}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur} />}

                {props.type === 'textarea' &&
                    <textarea id={props.id}
                        className={classeNames}
                        type={props.type}
                        rows={props.rows}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur} />}
            </div>
            {props.hasError && <p className={classes['text-error']}>Please enter a valid value.</p>}
        </>
    )
}
export default React.memo(Input);