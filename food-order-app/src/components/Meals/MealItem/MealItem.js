import { useContext } from 'react';
import useInput from '../../../hooks/use-input';
import CartContext from '../../../store/cart-context';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import classes from './MealItem.module.css';

const mustBeInInterval = (value) => value.trim().length > 0 && +value > 1 && +value <= 5;
const MealItem = ({ item }) => {
    const {
        value: counterValue,
        hasValueError,
        isValueValid: isCounterValid,
        valueChangeHandler: counterChangeHandler,
        valueBlurHandler: counterBlurHandler
    } = useInput(mustBeInInterval, '1');

    const cartCtx = useContext(CartContext);

    const submitHandler = (event) => {
        event.preventDefault();

        if (hasValueError) {
            return;
        }

        cartCtx.addItem({ ...item, counter: +counterValue })
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
                    className='input-counter' value={counterValue} onChange={counterChangeHandler}
                    onBlur={counterBlurHandler} />
                <div className={classes.actions}>
                    <Button className="btn btn-primary" type='submit' label='+ Add' />
                    {/* <Button className="btn btn-light" type='button' label='Details' />*/}
                </div>
            </form>
            {hasValueError && <p className='text text-danger text-right'> Should be between (1-5).</p>}
        </li>
    )
}

export default MealItem;