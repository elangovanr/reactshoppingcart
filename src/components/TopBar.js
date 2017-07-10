import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import productValidator from "../validators/productValidator";

import "./TopBar.css";

const TopBar = ({state: cartItems}) => {
    let totalItems = 0;
    cartItems.forEach((product) => {
        totalItems += product.count;
    });
    let cartBubble = null;
    if (totalItems > 0) {
        cartBubble = (
            <div className="cart-indicator center-align">
                {totalItems}
            </div>
        );
    }
    return (
        <div className="col-100 right-align nav-bar">
            <Link to="/" className="link">BROWSE</Link>
            <Link to="/cart" className="link cart-button">CART{cartBubble}</Link>
        </div>
    );
};

TopBar.propTypes = {
    state: PropTypes.arrayOf(productValidator).isRequired,
};

export default connect(state => ({
    state: state.cart,
}))(TopBar);
