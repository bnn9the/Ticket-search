export const selectBasketModule = (state) => state.basket

export const selectProductAmount = (state, id) => selectBasketModule(state)[id] || 0