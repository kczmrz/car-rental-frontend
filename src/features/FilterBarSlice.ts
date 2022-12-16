import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface priceFilter {
    min: number,
    max: number;
}


const initialState:priceFilter = {
    min: 1, max: 9999
}


export const FilterBarSlice = createSlice({
    name: 'FilterPrice',
    initialState,
    reducers: {
        ChangePriceFilter: (state, action:PayloadAction<priceFilter>)=> {
            state.max = action.payload.max;
            state.min = action.payload.min;
        }
       
    }
});

export const { ChangePriceFilter } = FilterBarSlice.actions;
export default FilterBarSlice.reducer;