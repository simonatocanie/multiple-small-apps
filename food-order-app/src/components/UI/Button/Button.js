import classes from './Button.module.css';

const Button = (props) => {
    let classList = '';
    const classesSplit = props.className.split(' ');
    classesSplit.map(item => classList += classes[item] + ' ')

    return (
        <button className={classList} onClick={props.onClick}>
            {props.iconComponent && <span>{props.iconComponent}</span>}
            <span className={classes.label}>
                {props.label}
            </span>
            {props.hasBadge && <span className={classes.badge}>
                {props.numberOfItems}
            </span>}
        </button>
    )
}

export default Button;