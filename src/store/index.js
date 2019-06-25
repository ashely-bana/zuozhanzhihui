import { createStore, combineReducers } from "redux";
import LoginReducer from "./login.js";

//通过combineReducer() 合并多个 reducer

const Store = combineReducers({
   LoginReducer
})

export default createStore(Store);