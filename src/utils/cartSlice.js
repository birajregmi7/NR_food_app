import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartsSlice = createSlice({

    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: ((state, action) => {
            state.items.push(action.payload)
        }),
        removeItems: ((state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }),
        clearCart: ((state, action) => {
            state.items = []
        })
    }
})
export const { addToCart, removeItems, clearCart } = cartsSlice.actions
export default cartsSlice.reducer