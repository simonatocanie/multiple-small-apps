import { useSelector } from 'react-redux';
import classes from './Cart.module.css';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.products)
    const totalPrice = useSelector(state => state.cart.totalPrice)

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
                total
                <span className={classes['total-price']}> ${totalPrice.toFixed(2)}</span>
            </div>
        </>
    )
}
export default Cart;