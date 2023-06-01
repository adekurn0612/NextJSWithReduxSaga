import apiMethod from "../../../api/apiMethod"
import {call, put} from 'redux-saga/effects'
import {resAddProduct, resDelProduct, resGetProduct, resUpdateProduct } from "../actionReduce"

function* handleGetProduct ():any{
    try {
        const result = yield call(apiMethod.getAllProduct )
        yield put(resGetProduct(result.data))
    } catch (error) {
        yield put(resGetProduct({message:error, status:400}))
    }
}

function* handleAddProduct (action:any):any{
    try {
        const result = yield call(apiMethod.createProduct , action.payload)
        yield put(resAddProduct(result.data))
    } catch (error) {
        yield put(resAddProduct({message:error, status:400}))
    }
}

function* handleUpdateProduct (action :any):any{
    try {
        const result = yield call(apiMethod.updateProduct, action.payload)
        yield put(resUpdateProduct(result.data))
    } catch (error) {
        yield put(resUpdateProduct({message:error, status:400}))
    }
}

function* handleDelProduct(action :any):any{
    try {
        const result = yield call(apiMethod.deleteProduct , action.payload)
        yield put(resDelProduct(result.data))
    } catch (error) {
        yield put(resDelProduct({message:error, status:400}))
    }
}

export {
    handleGetProduct,
    handleAddProduct,
    handleUpdateProduct,
    handleDelProduct
}