import authReducer from './reducers/auth-reducer';
import cartReducer from './reducers/cart-reducer';
import counterReducer from './reducers/counter-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            auth: authReducer,
            cart: cartReducer
        }
    });

export default store;
