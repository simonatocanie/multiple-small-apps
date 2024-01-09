import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.identifier === 'ADD') {
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.counter;
        const index = state.items.findIndex(x => x.id === action.item.id)
        let updatedItems;

        if (index === -1) {
            updatedItems = state.items.concat(action.item)
        }
        else {
            const existingItem = state.items[index];
            const updatedItem = {
                ...existingItem,
                counter: existingItem.counter + action.item.counter
            }
            updatedItems = [...state.items]
            updatedItems[index] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        }
    }

    if (action.identifier === 'REMOVE') {
        const index = state.items.findIndex(x => x.id === action.id)
        if (index === -1) {
            return
        }
        let existingItem = state.items[index];
        let updtedItems;
        if (state.items[index].counter === 1) {
            updtedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = { ...existingItem, counter: existingItem.counter - 1 }
            updtedItems = [...state.items];
            updtedItems[index] = updatedItem;
        }

        return {
            items: updtedItems,
            totalAmount: state.totalAmount - existingItem.price
        }
    }

    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchToCart] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchToCart({ identifier: 'ADD', item: item });
    }

    const removeItemHandler = (id) => {
        dispatchToCart({ identifier: 'REMOVE', id: id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider;