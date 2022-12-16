import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CartItem {
    id: string;
    type: string;
    days: number;  
    price: number;
    pricePerDay:number;
    item_name: string;
}


interface ShoppingCart {
    items: CartItem[];
    totalPrice: number,
}

const initialState:ShoppingCart = {
     items: [],
     totalPrice: 0
}

interface idAndNmbr {
    id: string;
    nmbr: number;
}


export const ShoppingCartSlice = createSlice({
    name: 'ProductsInCart',
    initialState,
    reducers: {
        AddToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            
        },

       DeleteCartElement: (state, action: PayloadAction<string>)=> {
            const index = state.items.map(object => object.id).indexOf(action.payload);
            state.items.splice(index, 1);
        },

        UpdateTotalPrice: (state)=> {
            const sumPrice = state.items.reduce((accumulator, object)=> {
                return accumulator + object.price;
            }, 0)

            state.totalPrice = sumPrice;
        },

        ChangeDaysCounter: (state, action: PayloadAction<idAndNmbr>)=> {
            const index = state.items.map(object => object.id).indexOf(action.payload.id);
            state.items[index].days = action.payload.nmbr;
        },

        ChangePrice: (state, action: PayloadAction<idAndNmbr>)=> {
            const index = state.items.map(object => object.id).indexOf(action.payload.id);
            state.items[index].price = action.payload.nmbr;
        },
      
       

        

       


    
    }})

export const { AddToCart, DeleteCartElement, UpdateTotalPrice, ChangeDaysCounter, ChangePrice } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;