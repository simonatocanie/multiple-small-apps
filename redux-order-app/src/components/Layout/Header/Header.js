import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../../store/reducers/auth-reducer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import classes from './Header.module.css';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const logoutHandler = (event) => {
        dispatch(authActions.logout());
        navigate('/login');
    }

    return (
        <header>
            <ul className={classes['text-left']}>
                {<li><Link to="/products">Products</Link></li>}
            </ul>
            <ul className={classes['text-right']}>
                {!isAuthenticated && <li><Link to='/login'>Login</Link></li>}
                {isAuthenticated &&
                    <>
                        <li><Button className='link' type='button' label='Logout'
                            onClick={logoutHandler} /></li>
                        {<li><Link to="/cart">Cart</Link></li>}
                    </>
                }
            </ul>
        </header>
    )
}
export default Header;