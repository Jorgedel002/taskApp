import { configureStore } from "@reduxjs/toolkit";
import {createStore, applyMiddleware} from "redux"

import {thunk} from "redux-thunk";
import reducers from "./reducers";

const appstore = createStore(reducers,applyMiddleware(thunk));

export default appstore;