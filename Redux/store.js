import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from '../Redux/Reducer';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/Loginslice";

export default configureStore ({
reducer :{
    user:userReducer 
}

})

 
 
export const store = createStore(Reducer,applyMiddleware(thunk));


