import CartButton from '../../UI/CartButton/CartButton';
import banner from '../../../assets/images/food_banner.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    const onShowCartHandler = () => {
        props.onShowCart();
    }

    return (
        <>
            <header className={classes.header}>
                <h2>React meals</h2>
                <CartButton onClick={onShowCartHandler} className="btn btn-secondary" />
            </header>
            <div className={classes.banner}>
                <img src={banner} alt="banner" />
            </div>
        </>
    )
}

export default Header;