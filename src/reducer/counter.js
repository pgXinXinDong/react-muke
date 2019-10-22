const ADD_TYPE = "ADD_GUU"
const MINUS_TYPE = "MINUS_GUU"
const ASYNC_TYPE = "ASYNC_GUN"
function counter (state=0,action){
    console.log("reducer",action)
    switch (action.type){
        case ADD_TYPE :
            return state = state + action.data
        case MINUS_TYPE :
                return state = state - 1
        case ASYNC_TYPE: return state + action.data
        default:
            return 10
    }
}

export default counter

