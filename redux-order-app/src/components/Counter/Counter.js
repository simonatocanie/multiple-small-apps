import { useSelector, useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import { counterActions } from '../../store/reducers/counter-reducer';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);
    
    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const increaseByValueHandler = () => {
        dispatch(counterActions.increaseByValue(5))
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    }

    return (
        <div className='text-center'>
            <h2>Redux state</h2>
            {showCounter && <h2> {counter}</h2>}
            <div className={classes.counter}>
                <Button className="btn btn-sm btn-light" onClick={incrementHandler} label="Add 1" />
                <Button className="btn btn-sm btn-success" onClick={increaseByValueHandler} label="Add 5" />
                <Button className="btn btn-sm btn-secondary" onClick={decrementHandler} label="Minus 1" />
            </div>

            <Button className="btn btn-md btn-primary" label="Toggle" onClick={toggleCounterHandler} />
        </div>
    )
}
export default Counter;