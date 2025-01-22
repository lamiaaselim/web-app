import { configureStore } from "@reduxjs/toolkit";
import products from './slices/product';
import cartCounter  from "./slices/cartCounter";
import authReducer from "./reducers/authReducer";


export const store = configureStore({
    reducer: {
        cartCounter,
        products,
        auth: authReducer,
      },
});
