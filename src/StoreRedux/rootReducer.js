import { combineReducers } from "redux"
import shoppingcartReducer from "./reducer"
import quantityproductsReducer from "../StoreRedux/QuantityProducts/reducer"

export default combineReducers({
    shoppingcart: shoppingcartReducer,
    quantity: quantityproductsReducer,
})
