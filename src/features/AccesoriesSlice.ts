import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import Accessories from "../pages/Accessories";

export interface Accessories {
    id: string;
    name: string;
    days: number;
    price: number;
    availability: boolean;
    
}

interface AccesoriesState {
    value: Accessories[];
    
}

const initialState:AccesoriesState = {
    value: [{
        id: uuid(),
        name: "Child seat #1 ",
        days: 1,
        price: 55,
        availability: true,
        
       
    },
    {
        id: uuid(),
        name: "Child seat #2 ",
        days: 1,
        price: 55,
        availability: true,
        
       
    },
    {
        id: uuid(),
        name: "CB Radio",
        days: 1,
        price: 30,
        availability: true,
       
    }]
}

export const AccesoriesSlice = createSlice({
    name: 'Accesories',
    initialState,
    reducers: {
        changeAvailabilityAccessory: (state, action:PayloadAction<string>) => {
            
            const index = state.value.map(object => object.id).indexOf(action.payload);
            state.value[index].availability = !state.value[index].availability; 
       
    }},

});

export const { changeAvailabilityAccessory } = AccesoriesSlice.actions;
export default AccesoriesSlice.reducer;