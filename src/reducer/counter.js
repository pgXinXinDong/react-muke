const ADD_TYPE = "ADD_GUU"
const MINUS_TYPE = "MINUS_GUU"
function counter (state=0,action){
    switch (action.type){
        case ADD_TYPE :
            return state = state + action.data
        case MINUS_TYPE :
                return state = state - 1
        default:
            return 10
    }
}

export default counter

