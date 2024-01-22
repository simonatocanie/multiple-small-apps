import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import DUMMY_PRODUCTS from '../../../assets/data'
import classes from './Products.module.css';
import { sendCartData } from '../../../store/actions/cart-actions';
import { cartActions } from '../../../store/reducers/cart-reducer';

const Products = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if (cart.changed) {
            dispatch(sendCartData(cart))
            dispatch(cartActions.resetChangedValue(false));
        }

    }, [cart, dispatch])

    const addItemHandler = (item) => {
        if (item.quantity) {
            dispatch(cartActions.addItemToCart({ ...item }));
            item.quantity = undefined;
        }
    }
    const onChangHandler = (event, id) => {
        const item = DUMMY_PRODUCTS.find(x => x.id === event.target.id);
        if (item !== null) {
            item.quantity = +event.target.value;
        }
    }

    return (
        <div className={classes['product-grid']}>
            <h3 className='text-center margin-bottom-50'>Products</h3>
            <ul>
                {DUMMY_PRODUCTS.map(item => <li key={item.id}>
                    <img src={item.src} alt={item.name} />
                    <div className={classes['product-column']}>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <div className={classes['display-inline']}>
                            <Input id={item.id} type='number' className='form-control' value={item.quantity} onChange={onChangHandler} />
                            <Button type='Button' label='+' className='btn bn-sm btn-light' onClick={addItemHandler.bind(null, item)} />
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}
export default Products;