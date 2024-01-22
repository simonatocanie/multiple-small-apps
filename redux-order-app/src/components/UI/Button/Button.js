import classes from './Button.module.css';

const Button = (props) => {
    const classLists = props.className?.split(' ');
    let classNames = '';
    if (classLists !== undefined) {
        classLists.map(item => classNames += classes[item] + ' ')
    }

    return <button className={classNames} onClick={props.onClick}>
        {props.label}
    </button>
}

export default Button;