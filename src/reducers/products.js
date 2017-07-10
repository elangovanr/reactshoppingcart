import * as types from '../actions/ActionTypes'

function products(state = [], action) {
    switch (action.type) {
        case types.INIT_DATA: {
            return action.data.products.map(product => ({
                ...product,
                id: product.name + product.measurement,
            }));
        }
        default: {
            return state;
        }
    }
}

export default products;
