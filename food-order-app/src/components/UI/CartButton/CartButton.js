import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';
import CartIcon from '../Icons/CartIcon/CartIcon';
import Button from '../Button/Button';

const CartButton = props => {
    const ctx = useContext(CartContext);
    const numberOfItems = ctx.items.reduce((currNumber, item) => {
        return currNumber + item.counter
    }, 0)

    const [isBtnHighLighted, setIsBtnHighLighted] = useState(false);
    const btnClasses = ` ${props.className} ${isBtnHighLighted ? 'bump' : ''}`;
    const { items } = ctx;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsBtnHighLighted(true);

        const timer = setTimeout(() => {
            setIsBtnHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <Button label='Cart' onClick={props.onClick} className={btnClasses} hasBadge="1"
            iconComponent={<CartIcon />} numberOfItems={numberOfItems} />
    )
}

export default CartButton;