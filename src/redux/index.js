import {user} from "./user.rudex"

function test(state=2,action) {
    switch (action.type) {
        case "log":return state = state+2
        default:return state +4
    }
}

const comReducer = {user ,test}

export default comReducer