import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++; //automatically creates another object behind, can be used
        },
        decrement(state) {
            state.counter--;
        },
        increaseByValue(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             counter: state.counter + 1
//         }
//     }

//     if (action.type === 'increaseByValue') {
//         return {
//             ...state,
//             counter: state.counter + action.amount
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     }

//     if (action.type === 'toggleCounter') {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

// export default counterReducer;