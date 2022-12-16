import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import { CarsPhoto } from '../graph/cars/index';
interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    engine:string;
    price: number;
    availability: boolean;
    premium?: boolean;
    img?: any;
}

interface CarState {
    value: Car[]
}

const initialState:CarState = {
    value: [
        {
            id: uuid(),
            brand: "SKODA",
            model: "KODIAQ",
            year: 2021,
            engine: "2.0 TDI",
            price: 300,
            availability: true,
            img: CarsPhoto.skodaKodiaq
        },
        {
            id: uuid(),
            brand: "VOLKSWAGEN",
            model: "TIGUAN",
            year: 2019,
            engine: "2.0 TSI",
            price: 220,
            availability: true,
            img: CarsPhoto.volkswagenTiguan
        },
        {
            id: uuid(),
            brand: "HYUNDAI",
            model: "TUCSON",
            year: 2017,
            engine: "1.6 GDI",
            price: 175,
            availability: true,
            img: CarsPhoto.hyundai_tucson
        },
        {
            id: uuid(),
            brand: "MERCEDES",
            model: "G-350D",
            year: 2019,
            engine: "4.0 Diesel",
            price: 2300,
            availability: true,
            premium: true,
            img: CarsPhoto.gklasa
        },
        {
            id: uuid(),
            brand: "AUDI",
            model: "RS 7",
            year: 2020,
            engine: "4.0 V8",
            price: 2400,
            availability: true,
            premium: true,
            img: CarsPhoto.audiRS7
        },
        {
            id: uuid(),
            brand: "BMW",
            model: "M8",
            year: 2021,
            engine: "4.4",
            price: 2700,
            availability: true,
            premium: true,
            img: CarsPhoto.BMWM8
        },
       ]
}


export const CarSlice = createSlice({
    name: "Cars",
    initialState,
    reducers: {
        addCar: (state, action:PayloadAction<Car>)=>{
            state.value.push(action.payload);
        },

        changeAvailabilityCar: (state, action:PayloadAction<string>) => {
            
                const index = state.value.map(object => object.id).indexOf(action.payload);
                state.value[index].availability = !state.value[index].availability; 
           
        }

    }
});


export const { addCar, changeAvailabilityCar } = CarSlice.actions;
export default CarSlice.reducer;
