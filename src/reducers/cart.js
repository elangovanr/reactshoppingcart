import * as types from '../actions/ActionTypes'

function cart(state = [], action) {
    switch (action.type) {
        case types.ADD_TO_CART: {
            const getProduct = state.find(product => product.id === action.product.id);
            if (getProduct) {
                return state.map((product) => {
                    if (product.id === action.product.id) {
                        return {
                            ...product,
                            count: product.count + 1,
                        };
                    }
                    return product;
                });
            }
            return state.concat({
                ...(action.product),
                count: 1,
            });
        }
        case types.REMOVE_FROM_CART: {
            const getProduct = state.find(product => product.id === action.product.id);
            if (getProduct && getProduct.count === 1) {
                return state.filter(product => product.id !== action.product.id);
            }
            return state.map((product) => {
                if (product.id === action.product.id) {
                    return {
                        ...product,
                        count: product.count - 1,
                    };
                }
                return product;
            });
        }
        default: {
            return state;
        }
    }
}
export default cart;
