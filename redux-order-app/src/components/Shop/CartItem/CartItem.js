import { useDispatch} from "react-redux";
import { cartActions } from '../../../store/reducers/cart-reducer';
import Button from '../../UI/Button/Button';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const {item} = props;
    const dispatch = useDispatch();

    const removeitemHandler = () => {
        dispatch(cartActions.removeItemFromCart(item.id));
    }

    const increaseQuantityHandler = () => {
        dispatch(cartActions.increaseQuantityFromCart(item.id));
    }

    const decreaseQuantityHandler = () => {
        dispatch(cartActions.decreaseQuantityFromCart(item.id));
    }

    return (
        <li key={item.id} className={classes['cart-item']}>
            <p>{item.id}</p>
            <p className={classes.name}>{item.name}</p>
            <p className={classes.quantity}>{item.quantity}</p>
            <span><Button className='btn btn-xs' label="+" onClick={increaseQuantityHandler} />
                <Button className='btn btn-xs' label="-" onClick={decreaseQuantityHandler} />
            </span>
            <p className={classes.price}>${item.price} x {item.quantity}</p>
            <Button className='remove-button' label="X" onClick={removeitemHandler} />
        </li>)
}

export default CartItem;