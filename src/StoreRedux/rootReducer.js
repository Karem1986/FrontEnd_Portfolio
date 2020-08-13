import { combineReducers } from "redux";
import shoppingcartReducer from "./reducer"

export default combineReducers({
    shoppingcart: shoppingcartReducer

});
