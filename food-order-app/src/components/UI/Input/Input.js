import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {

    return (
        <div className={classes['form-group']} >
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={ref} {...props} />
        </div>
    )
});

export default Input;