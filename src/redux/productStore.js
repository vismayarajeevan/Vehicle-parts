import { configureStore } from "@reduxjs/toolkit";
import productslice from './slices/ProductSlice';


const productStore = configureStore({
    reducer:{
        productReducer:productslice
    }
})
export default productStore;