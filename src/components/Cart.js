import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import TopBar from "./TopBar";
import ProductList from "./ProductList";

import {addToCart} from "../actions/index";
import {removeFromCart} from "../actions/index";

import productValidator from "../validators/productValidator";

import "./Cart.css";

const Cart = ({state: cartItems, dispatch}) => {
    let emptyDescription = null;
    if (cartItems.length === 0) {
        emptyDescription = (
            <div className="full-frame flex-auto center-align">
                <div className="empty-cart">Your cart is empty</div>
            </div>
        );
    }

    return (
        <div className="cart-page full-frame flex-col">
            <TopBar className="flex-auto"/>
            <ProductList
                className="flex-auto"
                products={cartItems}
                cart={cartItems}
                onAddCart={(product) => {
                    dispatch(addToCart(product));
                }}
                onRemoveCart={(product) => {
                    dispatch(removeFromCart(product));
                }}
            />
            {emptyDescription}
        </div>
    );
};

Cart.propTypes = {
    state: PropTypes.arrayOf(productValidator).isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
    state: state.cart,
}))(Cart);
