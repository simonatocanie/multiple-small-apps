import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import classes from './Form.module.css';

const Form = (props) => {
    let content = '';
    content = props.formInputs.map(item => {
        return <Input
            key={item.id}
            id={item.id}
            type={item.type}
            label={item.label}
            rows={item.rows}
            value={item.value}
            onChange={item.onChange}
            onBlur={item.onBlur}
            hasError={item.hasError} />
    });

    return (
        <>
            {props.title && <h2 className={classes.title}>{props.title}</h2>}
            <form onSubmit={props.onSubmit}>
                {content}

                <div className={classes.actions}>
                    <Button className='button button-light' type='submit' label='Cancel' onClick={props.onHide} />
                    <Button className='button button-primary' type='submit' label='Confirm' disabled={props.isSubmitDisabled} />
                </div>
            </form>
        </>
    )
}

export default React.memo(Form);