import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import TopBar from "./TopBar";
import AddToCart from "./AddToCart";
import productValidator from "../validators/productValidator";
import {addToCart, removeFromCart} from "../actions/index";
import "./ProductDetails.css";

const ProductDetails = ({product, cart, dispatch}) => {
    let productInfo = null;

    if (product) {
        productInfo = (
            <div className="product-details flex-row flex-auto">
                <div className="image-column">
                    <div>{product.name}</div>
                    <img src={`/images/${product.image}`} alt={product.name}/>
                </div>
                <div>
                    <div>{product.measurement}</div>
                    <div><b>${product.price}</b></div>
                    <div className="product-desc">{product.desc}</div>
                    <AddToCart product={product}
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
        );
    }
    return (
        <div className="full-frame flex-col">
            <TopBar className="flex-auto"/>
            {productInfo}
        </div>
    );
};

ProductDetails.propTypes = {
    state: productValidator.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default withRouter(
    connect((state, ownProps) => {
        return (
            {
                product: state.products.find(product => product.id === ownProps.match.params.id),
                cart: state.cart
            }
        )
    })(ProductDetails));
