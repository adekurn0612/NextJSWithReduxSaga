import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReduce from "../reducer/userReduce";
import { useReducer } from "react";
import ProductReduce from "../reducer/productReducer";
import {createLogger} from 'redux-logger'
// import rootSaga from './saga'
import watchAll from "../action/saga/indexjs";
import createSagaMiddleware from '@redux-saga/core'
import PagReduce from "../reducer/pagReducer";

const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers({
    userReducer : UserReduce ,
    productReducer:ProductReduce,
    pagReducer : PagReduce
})

const Store =configureStore({
    reducer,
    middleware: (getDefaultMiddleware :any)=>
    getDefaultMiddleware({
        serializableCheck : false,
    }).concat(logger).concat(saga)
})

saga.run(watchAll)
export default Store
