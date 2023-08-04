import { createSlice } from '@reduxjs/toolkit'

let initialState = []

const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, {payload}) => {
            state.length = 0
            state.push(...payload)
        },
        reset: () => initialState
    }
})

export const filmReducer = filmSlice.reducer
export const filmActions = filmSlice.actions