import apiMethod from "@/pages/api/apiMethod"
import { call ,put} from "redux-saga/effects"
import { resLogin } from "../actionReduce"


function* handleLogin (action :any):any{
    try {
        const result = yield call(apiMethod.login , action.payload)
        if(result.data.token){
            localStorage.setItem('token',result.data.token)
            yield put(resLogin({token:result.data.token , message:result.data.message }))
        }else{
            yield put(resLogin({token:'' , message:result.data.message }))
        }
    } catch (error) {
        yield put(resLogin({message:error, status:400}))
    }
}

export default handleLogin
