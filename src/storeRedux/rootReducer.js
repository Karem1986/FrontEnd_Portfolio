import { combineReducers } from "redux";
import productsIDReducer from "./reducer"

export default combineReducers({
    products: productsIDReducer

});
