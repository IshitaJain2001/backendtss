  const initialState= {
    user: {}
 }

 export function reducerfn(state= initialState, action ){
switch(action.type){
    case "signup" : return {
        ...state,
        user: action.payload 
    }

    default : return state; 

}
 }