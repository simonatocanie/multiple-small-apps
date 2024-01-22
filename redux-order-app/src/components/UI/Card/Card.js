import classes from './Card.module.css';

const Card = (props) => {
    const classList = `${classes.card} ${classes[props.className]}`
    return (
        <div className={classList}>
            {props.children}
        </div>
    )
}
export default Card;