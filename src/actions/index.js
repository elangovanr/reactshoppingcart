import * as types from "./ActionTypes";


export const initializeData = products => ({
    type: types.INIT_DATA,
    data: products
})

export const selectFilter = data => ({
    type: types.SELECT_FILTER,
    ...data
});

export const addToCart = product => ({
    type: types.ADD_TO_CART,
    product
});

export const clearFilter = () => ({
    type: types.CLEAR_FILTER
});


export const removeFromCart = product => ({
    type: types.REMOVE_FROM_CART,
    product
});