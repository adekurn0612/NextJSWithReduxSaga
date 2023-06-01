import apiMethod from "@/pages/api/apiMethod"
import { call ,put} from "redux-saga/effects"
import { resGetPage, resLogin } from "../actionReduce"


function* handlePag (action :any):any{
        try {
            const result = yield call(apiMethod.pagnation , action.payload)
            yield put(resGetPage(result.data))
        } catch (error) {
            yield put(resGetPage({message:error, status:400}))
        }
    }
export default handlePag;


