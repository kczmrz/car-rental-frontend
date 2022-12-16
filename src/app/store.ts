import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../features/CarSlice';
import cartReducer from '../features/ShoppingCartSlice';
import FilterReducer from '../features/FilterBarSlice';
import AccesoriesReducer from '../features/AccesoriesSlice';
export const store = configureStore({
    reducer:{
       cars: carReducer,
       accessories: AccesoriesReducer,
       cart: cartReducer,
       filterPrices: FilterReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;