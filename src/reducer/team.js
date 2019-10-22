const  QBL = "QIBINGLIAN"
const  DLT = "DULITUAN"

function team(state=2,action) {
    switch (action.type){
        case QBL :  return state = state + 2
        case DLT :  return state = state - 1
        default  :  return state
    }
}

export default team