import ActionType from "./actionType";
// import apiMethod from "../../api/apiMethod";

export const reqGetUser=()=>{
return{
type :ActionType.REQ_GET_USER,
}
}

export const resGetUser=(payload: any)=>{
return{
type : ActionType.GET_USER_RESPONSE,
payload
}
}

export const reqAddUser=(payload :any)=>{
  return{
  type :ActionType.ADD_USER,
  payload
  }
}
  
export const resAddUser=(payload :any)=>{
  return{
  type : ActionType.ADD_USER_RESPONSE,
  payload
  }
}

export const reqUpdateUser=(payload :any)=>{
  console.log(payload)
    return{
    type :ActionType.UPDATE_USER,
    payload
    }
    }
    
    export const resUpdateUser=(payload:any)=>{
    return{
    type : ActionType.UPDATE_USER_RESPONSE,
    payload
    }
    }

    export const reqDelUser=(payload :any)=>{
      console.log(payload)
      return{
      type :ActionType.DEL_USER,
      payload 
      }
      }
      
      export const resDelUser=(payload :any)=>{
      return{
      type : ActionType.DEL_USER_RESPONSE,
      payload
      }
      }


  //PRODUCT

  export const reqGetProduct=()=>{
    return{
    type :ActionType.REQ_GET_PRODUCT,
    }
    }
    
    export const resGetProduct=(payload :any)=>{
    return{
    type : ActionType.GET_PRODUCT_RESPONSE,
    payload
    }
    }
    
    export const reqAddProduct=(payload :any)=>{
      return{
      type :ActionType.ADD_PRODUCT,
      }
    }
      
    export const resAddProduct=(payload :any)=>{
      return{
      type : ActionType.ADD_PRODUCT_RESPONSE,
      payload
      }
    }
    
    export const reqUpdateProduct=(payload :any)=>{
        return{
        type :ActionType.UPDATE_PRODUCT,
        }
        }
        
        export const resUpdateProduct=(payload :any)=>{
        console.log(payload)
        return{
        type : ActionType.UPDATE_PRODUCT_RESPONSE,
        payload
        }
        }
    
        export const reqDelProduct=(payload :any)=>{
          // console.log(payload)
          return{
          type :ActionType.DEL_PRODUCT,
          payload
          }
          }
          
          export const resDelProduct=(payload :any)=>{
          return{
          type : ActionType.DEL_PRODUCT_RESPONSE,
          payload
          }
          }
          export const reqLogin=(payload :any)=>{
            // console.log(payload)
            return{
              type : ActionType.LOGIN,
              payload
            }
          }
          export const resLogin=(payload :any)=>{
            return{
              type : ActionType.LOGIN_RESPONSE,
              payload:payload
            }
          }

          //pag
          export const reqGetPage=(payload :any)=>{
            console.log(payload)
            return{
              type : ActionType.PAG,
              payload
            } 
            }
            export const resGetPage=(payload :any)=>{
              // console.log(payload)
              return{
                type : ActionType.PAG_RESPONSE,
                payload
              } 
              }
    


  




