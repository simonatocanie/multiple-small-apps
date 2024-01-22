import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [], totalQuantity: 0, totalPrice: 0, changed: false }
const cartSlice = createSlice({
    initialState: initialState,
    name: 'cart',
    reducers: {
        resetCartData(state, action) {
            if (action.payload) {
                state.products = action.payload.products;
                state.totalQuantity = action.payload.totalQuantity;
                state.totalPrice += action.payload.totalPrice;
            }
        },
        addItemToCart(state, action) {
            const item = action.payload;
            const existentItem = state.products.find(x => x.id === item.id);
            if (existentItem) {
                state.totalPrice -= existentItem.quantity * item.price;
                existentItem.quantity = item.quantity;
            }
            else {
                state.products.push(item);
                state.totalQuantity++;
            }
            state.totalPrice += item.quantity * item.price;
            state.changed = true;
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existentItem = state.products.find(x => x.id === id);
            state.totalPrice -= existentItem.quantity * existentItem.price;
            state.products = state.products.filter(item => item.id !== id);
            //state.changed = true;
        },

        increaseQuantityFromCart(state, action) {
            const id = action.payload;
            const existentItem = state.products.find(x => x.id === id);
            existentItem.quantity++;

            state.totalPrice += existentItem.price;
            // state.changed = true;
        },

        decreaseQuantityFromCart(state, action) {
            const id = action.payload;
            const existentItem = state.products.find(x => x.id === id);
            if (existentItem.quantity === 1) {
                state.products = state.products.filter(item => item.id !== id);
            }
            else {
                existentItem.quantity--;
            }
            state.totalPrice -= existentItem.price;
            //state.changed = true;
        },
        resetChangedValue(state, action) {
            state.changed = action.payload;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;