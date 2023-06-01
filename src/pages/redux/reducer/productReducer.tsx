import ActionType from "../action/actionType";

const initialState ={
    products: [],
    message : '',
    status : '',
    refresh: '',
}


export default function ProductReduce(state = initialState, action :any) {
        const {type , payload} = action;
        // console.log(payload)
        switch (type) {
            case ActionType.GET_PRODUCT_RESPONSE:
            return {state , products:payload ,status:payload.status, refresh:true};
            case ActionType.ADD_PRODUCT_RESPONSE:
            return {state , products:payload ,status:payload.status, refresh:false};
            case ActionType.DEL_PRODUCT_RESPONSE:
            return {state , user:payload ,status:payload.status, refresh:true};
            case ActionType.UPDATE_PRODUCT_RESPONSE:
            return {state , products:payload ,status:payload.status, refresh:false};
            default:
                return state;
            }
}
