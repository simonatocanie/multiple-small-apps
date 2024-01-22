import { createSlice } from "@reduxjs/toolkit";

const initialState = { isNotificationVisible: false, status: '', title: '', message: '' }
const notificationSlice = createSlice({
    initialState: initialState,
    name: 'notification',
    reducers: {

        resetNotificationStatus(state) {
            state.isNotificationVisible = false;
        },

        showNotification(state, action) {
            const notification = action.payload;

            for (const key in notification) {
                if (notification.hasOwnProperty(key)) {
                    state[key] = notification[key];
                }
            }
        }
    }
});

export const notificationSliceActions = notificationSlice.actions;
export default notificationSlice.reducer;