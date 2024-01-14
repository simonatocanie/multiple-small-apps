import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    const isInput = props.type === 'text' || props.type === 'date' || props.type === 'password';
    let classeNames = props.hasError ? `${classes['form-control']} ${classes['invalid']}` : classes['form-control'];

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
            {props.hasError !== 0 && <p className={classes['text-danger']}>Please enter a valid value.</p>}
        </>
    )
}
export default React.memo(Input);