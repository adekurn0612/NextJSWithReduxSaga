import apiMethod from "../../../api/apiMethod"
import {call, put} from 'redux-saga/effects'
import { resAddUser, resDelUser, resGetUser, resUpdateUser } from "../actionReduce"

function* handleGetUser ():any{
    try {
        const result = yield call(apiMethod.findAll)
        yield put(resGetUser(result.data[0]))
    } catch (error) {
        yield put(resGetUser({message:error, status:400}))
    }
}

function* handleAddUser (action :any):any{
    try {
        const result = yield call(apiMethod.Create , action.payload)
        yield put(resAddUser(result.data))
    } catch (error) {
        yield put(resAddUser({message:error, status:400}))
    }
}

function* handleUpdateUser (action :any) :any{
    try {
        const result = yield call(apiMethod.Updatecs, action.payload)
        yield put(resUpdateUser(result.data))
    } catch (error) {
        yield put(resUpdateUser({message:error, status:400}))
    }
}

function* handleDelUser (action:any):any{
    console.log(action)
    try {
        const result = yield call(apiMethod.Delete , action.payload)
        yield put(resDelUser(result.data))
    } catch (error) {
        yield put(resDelUser({message:error, status:400}))
    }
}

export {
    handleGetUser,
    handleAddUser,
    handleUpdateUser,
    handleDelUser
}

