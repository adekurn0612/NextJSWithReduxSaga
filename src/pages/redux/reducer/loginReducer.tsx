import ActionType from "../action/actionType";

const initialState ={
    token: '',
    refresh : '',
}


export default function ProductReduce(state = initialState, action :any) {
        const {type , payload} = action;
        // console.log(payload)
        switch (type) {
            case ActionType.LOGIN:
            return {state , token:payload.token , refresh:true};
            default:
                return state;
            }
}