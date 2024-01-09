import { useContext, useRef, useState } from 'react';
import CartContext from '../../../store/cart-context';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import classes from './MealItem.module.css';

const MealItem = ({ item }) => {
    const counterRef = useRef();
    const [isCounterValid, setisCounterValid] = useState(true);
    const cartCtx = useContext(CartContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const counterValue = counterRef.current.value;

        if (counterValue.trim().length === 0 || +counterValue < 1 || +counterValue > 5) {
            setisCounterValid(false);
            return;
        } else {
            setisCounterValid(true);
        }
        
        cartCtx.addItem({ ...item, counter: +counterRef.current.value })
    }

    return (
        <li className={classes['meal-item']}>
            <div>
                <h3>{item.name}</h3>
                <span className={classes.description}> {item.description}</span>
                <span className={classes.price}>
                    {`$${item.price.toFixed(2)}`}
                </span>
            </div>
            <form onSubmit={submitHandler} noValidate>
                <Input id='counter' label='Counter' type='number' min='1' max='5'
                    defaultValue='1' ref={counterRef} />
                <div className={classes.actions}>
                    <Button className="btn btn-primary" type='submit' label='+ Add' />
                    {/* <Button className="btn btn-light" type='button' label='Details' />*/}
                    {!isCounterValid && <p className='text-danger'> Should be between (1-5).</p>}
                </div>
            </form>
        </li>
    )
}

export default MealItem;