import React from "react";
import ReactDOM from "react-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import "./index.css";
import * as reducers from "./reducers/index";

import App from "./components/App";
import {initializeData} from "./actions";
import _products from "./data/products.json";

let enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    combineReducers(reducers),
    enhancer
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));

store.dispatch(initializeData(_products));




