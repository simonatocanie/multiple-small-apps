import React from "react";
import classes from './Button.module.css'

const Button = props => {
    let classList = '';
    let classesSplit = props.className?.split(' ');
    if(classesSplit){
        classesSplit.map(classItem => classList += classes[classItem] + ' ');//maybe for multiple classes
    }

    return (
        <button type={props.type} className={classList} onClick={props.onClick} disabled={props.disabled}>
            {props.label}
        </button>
    )
}
export default React.memo(Button);