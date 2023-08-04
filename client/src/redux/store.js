import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from '@/redux/features/basket'
import { filmReducer } from '@/redux/features/films'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        films: filmReducer,
    },
})