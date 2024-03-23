import { configureStore } from "@reduxjs/toolkit";
import productsDataSlice from "../features/productsDataSlice";
import cartSlice from "../features/cartSlice";
import filterSlice from "../features/filterSlice";


export const store = configureStore({
    reducer:{
        app:productsDataSlice,
        allcart:cartSlice,
        filter:filterSlice
    }
})