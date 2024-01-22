import { useDispatch } from 'react-redux';
import { authActions } from '../../store/reducers/auth-reducer';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.login())
        navigate('/user_profile');
    }
    return (
        <Card className='md-size'>
            <h3 className='text-center margin-bottom-50'>Login Form</h3>
            <form onSubmit={submitHandler}>
                <Input id='username' name='username' type='text' label='Username:' />
                <Input id='password' name='password' type='password' label='Password:' />

                <div className={classes.actions}>
                    <Button label='Submit' type='submit' className='btn btn-md btn-success' />
                </div>
            </form>
        </Card>
    )
}

export default Login;