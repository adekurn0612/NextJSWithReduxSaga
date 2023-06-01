import ActionType from "../action/actionType";

const initialState ={
    user: [],
    message : '',
    status : '',
    refresh: '',
}


export default function PagReduce(state = initialState, action :any) {
        const {type , payload} = action;
        // console.log(payload)
        switch (type) {
            case ActionType.PAG_RESPONSE:
            return {state , user:payload ,status:payload.status, refresh:true};
            default:
                return state;
            }
}