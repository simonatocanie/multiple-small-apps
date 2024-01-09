
import Button from '../../UI/Button/Button';
import classes from './CartItem.module.css';

const CartItem = props => {
    const { item } = props;

    return (
        <li className={classes['cart-item']}>

            <h3>{item.name}</h3>
            <div className={classes.summary}>
                <span className={classes.price}>{`$${item.price.toFixed(2)}`}</span>
                <span className={classes.counter}>x{item.counter}</span>
            </div>
            <div className={classes.actions}>
                <Button type='button' label="-" className='btn btn-light btn-icons' onClick={props.onRemoveItem} />
                <Button type='button' label="+" className='btn btn-light btn-icons' onClick={props.onAddItem} />
            </div>
        </li>
    )
}
export default CartItem;