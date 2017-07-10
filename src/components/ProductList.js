import React from "react";
import PropTypes from "prop-types";
import hash from "object-hash";

import Product from "./Product";

import productValidator from "../validators/productValidator";

const ProductList = ({products, cart, onAddCart, onRemoveCart}) => {
    const productArray = products.map(product => (
        <Product
            key={hash(product)}
            cart={cart}
            product={product}
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
        />
    ));
    return (
        <div className="product-list">
            {productArray}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(productValidator).isRequired,
    cart: PropTypes.arrayOf(productValidator),
    onAddCart: PropTypes.func.isRequired,
    onRemoveCart: PropTypes.func.isRequired,
};

export default ProductList;
