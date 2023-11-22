import {createStore,applyMiddleware} from"redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import {moviesReducer} from"../reducer/reducer.js"
import thunk from "redux-thunk"
export  const store =createStore(moviesReducer,applyMiddleware(thunk))