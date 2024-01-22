
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartData } from '../../../store/actions/cart-actions';
import CartItem from '../CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products)
    const totalPrice = useSelector(state => state.cart.totalPrice)

    useEffect(() => {
        dispatch(getCartData())
    }, [dispatch]);

    return (
        <>
            <h2 className='text-center margin-bottom-50'>Cart</h2>
            <ul className={classes.cart}>
                {cartItems.map(item =>
                    <CartItem key={item.id} item={item} />
                )}
            </ul>

            <hr />
            <div className={classes['text-right']}>
                Total
                <span className={classes['total-price']}> ${totalPrice.toFixed(2)}</span>
            </div>
        </>
    )
}
export default Cart;