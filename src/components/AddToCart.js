import React from "react";
import PropTypes from "prop-types";

import productValidator from "../validators/productValidator";

import "./AddToCart.css";

const AddToCart = ({product, cart, onAddCart, onRemoveCart}) => {

    let cartItem = cart.find(p => p.id === product.id);
    let count = 0;
    if (cartItem)
        count = cartItem.count;

    let addtoCartButton = null;
    if (count === 0) {
        addtoCartButton = (
            <button
                className="btn btn-product center-align"
                onClick={(event) => {
                    event.preventDefault();
                    onAddCart(product);
                }}
            >
                + ADD TO CART
            </button>
        );
    } else {
        addtoCartButton = (
            <div className="btn">
                <button
                    className="btn-cart-control"
                    onClick={(event) => {
                        event.preventDefault();
                        onRemoveCart(product);
                    }}
                >-
                </button>
                <div className="product-count">{count}</div>
                <button
                    className="btn-cart-control"
                    onClick={(event) => {
                        event.preventDefault();
                        onAddCart(product);
                    }}
                >+
                </button>
            </div>
        );
    }
    return (
        <div className="btn-add-cart center-align">
            {addtoCartButton}
        </div>
    );
};

AddToCart.propTypes = {
    product: productValidator.isRequired,
    cart: productValidator.isRequired,
    onAddCart: PropTypes.func.isRequired,
    onRemoveCart: PropTypes.func.isRequired,
};

export default AddToCart;
