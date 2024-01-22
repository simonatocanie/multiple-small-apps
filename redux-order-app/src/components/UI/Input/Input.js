import classes from './Input.module.css';

const Input = (props) => {

    return (
        <div className={classes['form-group']}>
            <label htmlFor={props.id}>{props.label}</label>
            <input className={classes['form-control']}
                id={props.id} name={props.name} type={props.type}
                value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default Input;