import {takeEvery , all} from 'redux-saga/effects'
import Actiontype from '../actionType'
import { handleAddProduct, handleDelProduct, handleGetProduct, handleUpdateProduct } from './productSaga'
import { handleAddUser, handleDelUser, handleGetUser, handleUpdateUser } from './userSaga'
import handleLogin from './login'
import handlePag from './pagnation'

function* watchAll(){
    yield all([
        takeEvery(Actiontype.REQ_GET_USER,handleGetUser),
        takeEvery(Actiontype.ADD_USER,handleAddUser),
        takeEvery(Actiontype.UPDATE_USER,handleUpdateUser),
        takeEvery(Actiontype.DEL_USER,handleDelUser),

        //product

        takeEvery(Actiontype.REQ_GET_PRODUCT,handleGetProduct),
        takeEvery(Actiontype.ADD_PRODUCT,handleAddProduct),
        takeEvery(Actiontype.UPDATE_PRODUCT,handleUpdateProduct),
        takeEvery(Actiontype.DEL_PRODUCT,handleDelProduct),
        takeEvery(Actiontype.LOGIN, handleLogin),

        //pag
        takeEvery(Actiontype.PAG , handlePag)
        
    ])
}

export default watchAll