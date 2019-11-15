import io from "socket.io-client"
import axios from "axios"
const socket = io("ws://localhost:9093")
const MSG_RECV ="MSG_RECV"
const MSG_USERS="MSG_USERS"

const initDat = {
    chatmsg:[],
    users:[]

}

export function chat(state=initDat,action) {
    switch (action.type){
        case MSG_RECV:
            return { ...state,chatmsg:[...state.chatmsg,action.payload] }
        case MSG_USERS:
            return {...state,users:[...action.payload.users]}
        default:
            return state
    }
}

function msgRecv(data) {
    return {type:MSG_RECV,payload:data}
}
export  function getChatList() {
  return dispatch => axios.get("/chat/getChatList")
        .then(res=>{
            console.log("getChatList",res)
        })
}

export function recvMsg(){
   return (dispatch,getState) =>{
       console.log("getState",getState())
        socket.on("recvMsg",function(data){
            console.log("data",data)
            dispatch(msgRecv(data))
        })
    }
}


export function sendMsg({from ,to ,msg}) {

    return dispatch =>{
        socket.emit('sendmsg',{from ,to ,msg})
    }
}