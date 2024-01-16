import { useContext, useState } from 'react';
import useHttp from '../../hooks/use-https';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';
import CartContext from '../../store/cart-context';
import { Modal, ModalContainer } from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const { error, isLoading, sendRequest: postRequest, wasSuccessfull } = useHttp();

    const addItemHandler = (item) => {
        cartCtx.addItem({ ...item, counter: 1 })
    }

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemsContainer =
        cartCtx.items.length === 0 && !wasSuccessfull ? <p className='text-center text-bold'>No items in the cart</p>
            :
            <ul>{cartCtx.items.map(item =>
                <CartItem
                    item={item}
                    key={item.id}
                    onAddItem={addItemHandler.bind(null, item)}
                    onRemoveItem={removeItemHandler.bind(null, item.id)} />
            )}</ul>

    const orderHandler = () => {
        setIsCheckout(true)
    }
    const onConfirmHandler = async (userData) => {

        await postRequest({
            url: 'orders.json', method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: {
                orderItems: cartCtx.items,
                userAddress: userData
            }
        }, {})
            .then(() => {
                setIsCheckout(false)
                cartCtx.resetCart();
            })
    }

    return (
        <Modal onHideCart={props.onHideCart}>
            <ModalContainer className='title-danger'>
                <h3 >Items added in the cart</h3>
            </ModalContainer>
            <ModalContainer className='content-container'>
                {cartItemsContainer}
            </ModalContainer>

            <div className={classes.amount}>
                <label>Total amount</label>
                <label>{`$${cartCtx.totalAmount?.toFixed(2)}`}</label>
            </div>

            {isCheckout ?
                <div className={classes.checkout}>
                    <Checkout onCancel={props.onHideCart} onConfirm={onConfirmHandler} />
                    {isLoading && <p className='text'>Is loading ....</p>}
                </div>
                :
                <ModalContainer className='footer-right'>
                    <Button className='btn btn-secondary' type='button' label='Close' onClick={props.onHideCart} />
                    {cartCtx.items.length > 0 && !isCheckout && !wasSuccessfull &&
                        <Button className='btn btn-primary' type='button' label='Order' onClick={orderHandler} />}
                </ModalContainer>
            }
            {error !== '' && <p className='text text-danger row-5'>There was an unexpected error. Please try later.</p>}
            {wasSuccessfull && <p className='text text-success row-5'>Your order was send. Thank you! We will keep you updated by email.</p>}
        </Modal>
    )
}

export default Cart;