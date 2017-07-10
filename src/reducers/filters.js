import * as types from '../actions/ActionTypes'

const filterCategories = {
    brand: "Brands",
    price: "Price",
};

function filters(state = [], action) {
    switch (action.type) {
        case types.INIT_DATA: {
            return action.data.filters.reduce((arr, filter) =>
                arr.concat(filter.values.map(value => ({
                    value,
                    category: filterCategories[filter.name],
                    checked: false,
                    name: filter.name,
                }))), []);
        }
        case types.SELECT_FILTER: {
            return state.map((filter) => {
                if (action.name === filter.name && action.value === filter.value) {
                    return {
                        ...filter,
                        checked: !filter.checked,
                    };
                }
                return filter;
            });
        }
        case types.CLEAR_FILTER: {
            return state.map((filter) => {
                if (filter.checked) {
                    return {
                        ...filter,
                        checked: false,
                    };
                }
                return filter;
            });
        }
        default: {
            return state;
        }
    }
}

export default filters;
