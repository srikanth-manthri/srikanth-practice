
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {cartReducer} from './Reducer';





export const store = createStore(cartReducer,applyMiddleware(thunk));
