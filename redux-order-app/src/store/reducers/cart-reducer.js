import { createSlice } from '@reduxjs/toolkit';


const initialState = { products: [], totalQuantity: 0, totalPrice: 0 }
const cartSlice = createSlice({
    initialState: initialState,
    name: 'cart',
    reducers: {
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
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existentItem = state.products.find(x => x.id === id);
            state.totalPrice -= existentItem.quantity * existentItem.price;
            state.products = state.products.filter(item => item.id !== id);
        },

        increaseQuantityFromCart(state, action) {
            const id = action.payload;
            console.log(id)
            const existentItem = state.products.find(x => x.id === id);
            existentItem.quantity++;

            state.totalPrice += existentItem.price;
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
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;