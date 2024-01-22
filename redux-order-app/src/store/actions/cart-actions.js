import { cartActions } from '../reducers/cart-reducer';
import { notificationSliceActions } from '../reducers/notification-reducer';

export const getCartData = () => {
    return async (dispatch) => {

        const getData = async () => {
            const response = await fetch("https://redux-order-app-d1913-default-rtdb.europe-west1.firebasedatabase.app/cart.json");

            if (!response.ok) {
                throw new Error('There was an unexpected error');
            }
            const data = await response.json();

            return data;
        }

        try {
            const data = await getData();
            console.log(data)
            dispatch(cartActions.resetCartData({
                products: data.products ?? [],
                totalQuantity: data.totalQuantity ?? 0,
                totalPrice: data.totalPrice ?? 0,
            }))
        }
        catch (error) {
            console.log(error)
            dispatch(notificationSliceActions.showNotification(
                {
                    isNotificationVisible: true,
                    status: 'error',
                    title: 'Error',
                    message: 'An expected error occured!!'
                }
            ))
        }
    }
}
export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(notificationSliceActions.showNotification(
            {
                isNotificationVisible: true,
                status: 'pending',
                title: 'Pending...',
                message: 'Sending cart data!'
            }
        ));

        const sendRequest = async () => {
            const response = await fetch("https://redux-order-app-d1913-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'aplication/json' },
                    body: JSON.stringify(
                        {
                            products: cart.products,
                            totalQuantity: cart.totalQuantity,
                            totalPrice: cart.totalPrice
                        })
                });

            if (!response.ok) {
                throw new Error('There was an unexpected error');
            }
        }


        try {
            const timeout = setTimeout(async () => {
                await sendRequest();
                dispatch(notificationSliceActions.showNotification(
                    {
                        isNotificationVisible: true,
                        status: 'success',
                        title: 'Success',
                        message: 'Request send successfully!!'
                    }
                ))
            }, 2000); //fake delay to show pending notification
            // clearTimeout(timeout);
        }
        catch {
            dispatch(notificationSliceActions.showNotification(
                {
                    isNotificationVisible: true,
                    status: 'error',
                    title: 'Error',
                    message: 'An expected error occured!!'
                }
            ))
        }
    }
}