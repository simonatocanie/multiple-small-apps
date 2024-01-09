import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';
import Button from '../UI/Button/Button';
import { Modal, ModalContainer } from '../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const addItemHandler = (item) => {
        cartCtx.addItem({ ...item, counter: 1 })
    }

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemList = <ul>{cartCtx.items.map(item =>
        <CartItem
            item={item}
            key={item.id}
            onAddItem={addItemHandler.bind(null, item)}
            onRemoveItem={removeItemHandler.bind(null, item.id)} />
    )}</ul>

    const orderHandler = () => {
        console.log('ordering');
    }

    return (
        <Modal onHideCart={props.onHideCart}>
            <ModalContainer className='title-danger'>
                <h3 >Items added in the cart</h3>
            </ModalContainer>
            <ModalContainer className='content-container'>
                {cartItemList}
            </ModalContainer>

            <div className={classes.amount}>
                <label>Total amount</label>
                <label>{`$${cartCtx.totalAmount?.toFixed(2)}`}</label>
            </div>

            <ModalContainer className='footer-right'>
                <Button className='btn btn-secondary' type='button' label='Close' onClick={props.onHideCart} />
                {cartCtx.items.length > 0 && <Button className='btn btn-primary' type='button' label='Order' onClick={orderHandler} />}
            </ModalContainer>
        </Modal>
    )
}

export default Cart;