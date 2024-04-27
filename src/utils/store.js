import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        cart: cartsSlice
    }
})
export default store