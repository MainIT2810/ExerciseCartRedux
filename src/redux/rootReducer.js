import {combineReducers} from "redux";
import ShoppingCartReducer from "./ShoppingCartReducer"
const rootReducer = combineReducers({ //Store tổng của ứng dụng
    stateCart: ShoppingCartReducer
});

export default rootReducer;