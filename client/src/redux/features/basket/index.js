import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        increment: (state, {payload}) => {
            const count = state[payload] || 0
            if (count === 30) {
                return
            }
            state[payload] = count + 1
        },
        decrement: (state, {payload}) => {
            const count = state[payload]

            if (!count) {
                return
            }

            if (count === 1) {
                delete state[payload]
                return
            }

            state[payload] = count - 1
        },
        delete: (state, {payload}) => {
            delete state[payload]
            return
        },
        reset: () => initialState
    }
})

export const basketReducer = basketSlice.reducer
export const basketActions = basketSlice.actions