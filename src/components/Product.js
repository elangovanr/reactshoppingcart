import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import productValidator from "../validators/productValidator";
import AddToCart from "./AddToCart";

import "./Product.css";

const Product = ({product, cart, onAddCart, onRemoveCart}) => {
    const link = `/details/${encodeURIComponent(product.id)}`;
    return (

        <div className="product-container center-align">
            <Link to={link} className="product">
                <img src={`/images/${product.image}`} alt={product.name}/>
                <div className="product-title">
                    <div>{product.name}</div>
                    <div>{product.measurement}</div>
                </div>
                <div><b>${product.price}</b></div>
            </Link>
            <AddToCart product={product}
                       cart={cart}
                       onAddCart={onAddCart}
                       onRemoveCart={onRemoveCart}
            />
        </div>

    );
};

Product.propTypes = {
    product: productValidator.isRequired,
    cart: productValidator.isRequired,
    onAddCart: PropTypes.func.isRequired,
    onRemoveCart: PropTypes.func.isRequired,
};

export default connect((state) => {

    return {
        state: {
            product: state.product,
            cart: state.cart,
            onAddCart: state.onAddCart,
            onRemoveCart: state.onRemoveCart
        },
    };
})(Product);
