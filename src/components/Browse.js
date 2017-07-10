import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import TopBar from "./TopBar";
import FilterList from "./FilterList";
import ProductList from "./ProductList";

import filterValidator from "../validators/filterValidator";
import productValidator from "../validators/productValidator";

import {addToCart, clearFilter, removeFromCart, selectFilter} from "../actions/index";

import "./Browse.css";

const Browse = ({state, dispatch}) => {
    const {filters, products, cart} = state;
    return (
        <div className="full-frame flex-col">
            <TopBar className="flex-auto"/>
            <div className="flex-row flex-auto">
                <div className="left-panel">
                    <FilterList
                        filters={filters}
                        onClearClick={() => {
                            dispatch(clearFilter());
                        }}
                        onFilterClick={((data) => {
                            dispatch(selectFilter(data));
                        })}
                    />
                </div>
                <div className="main-panel">
                    <ProductList
                        products={products}
                        cart={cart}
                        onAddCart={(product) => {
                            dispatch(addToCart(product));
                        }}
                        onRemoveCart={(product) => {
                            dispatch(removeFromCart(product));
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

Browse.propTypes = {
    state: PropTypes.shape({
        filters: PropTypes.arrayOf(filterValidator).isRequired,
        products: PropTypes.arrayOf(productValidator).isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
};

function doFilter(filter, product) {
    switch (filter.name) {
        case "brand": {
            return product.brand === filter.value;
        }
        case "price": {
            const priceRange = filter.value.split("-");
            if (priceRange.length === 2) {
                const floatPrice = parseFloat(product.price);
                return (floatPrice >= parseFloat(priceRange[0]) && floatPrice <= parseFloat(priceRange[1]));
            }
            return true;
        }
        default: {
            return true;
        }
    }
}

export default connect((state) => {
    const selectedFilters = state.filters.filter(filter => filter.checked);

    const filterCategories = selectedFilters.reduce((acc, filter) => {
        if (!acc.includes(filter.category)) {
            return acc.concat(filter.category);
        }
        return acc;
    }, []);

    let products = state.products;

    filterCategories.forEach(category => {

            let categoryFilters = selectedFilters.filter(filter => filter.category === category);
            products = products.filter(product =>
                categoryFilters.some(filter => doFilter(filter, product)));
        }
    );

    return {
        state: {
            filters: state.filters,
            products,
            cart: state.cart,
        },
    };
})(Browse);
