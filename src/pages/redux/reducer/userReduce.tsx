import ActionType from "../action/actionType";

const initialState ={
    user: [],
    message : '',
    status : '',
    refresh: '',
}


export default function UserReduce(state = initialState, action : any) {
        const {type , payload} = action;
        // console.log(payload)
        switch (type) {
            case ActionType.GET_USER_RESPONSE:
            return {state , user:payload ,status:payload.status, refresh:true};
            case ActionType.ADD_USER_RESPONSE:
            return {status:payload.status , refresh:false};
            case ActionType.DEL_USER_RESPONSE:
            return {status:payload.status , refresh:false};
            case ActionType.UPDATE_USER_RESPONSE:
            return {status:payload.status, refresh:false};
            default:
                return state;
            }
}
