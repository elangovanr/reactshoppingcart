import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";

import Browse from "./Browse";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Browse}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/details/:id" component={ProductDetails}/>
        </div>
    </Router>
);

export default App;
