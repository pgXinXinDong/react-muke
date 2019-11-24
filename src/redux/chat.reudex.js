import io from "socket.io-client"
import axios from "axios"
const socket = io("ws://localhost:9093")
const MSG_RECV ="MSG_RECV"
const MSG_CHATUSERSLIST="MSG_CHATUSERSLIST"

const initDat = {
    chatmsg:[],
    users:{}

}

export function chat(state=initDat,action) {
    switch (action.type){
        case MSG_RECV:
            return { ...state,chatmsg:[...state.chatmsg,action.payload] }
        case MSG_CHATUSERSLIST:
            return {...state,users:action.payload}
        default:
            return state
    }
}

function msgRecv(data) {
    return {type:MSG_RECV,payload:data}
}

function msgCharUserList(data){
    return{type:MSG_CHATUSERSLIST,payload:data}
}
export  function getChatList(userId) {
  return dispatch => axios.post("/chat/getChatList",{userId:userId})
        .then(res=>{
            console.log("res",res)
            dispatch(msgCharUserList(res.data.data))
        })
}

export function recvMsg(){
   return (dispatch,getState) =>{
       console.log("getState",getState())
        socket.on("recvMsg",function(data){
            dispatch(msgRecv(data))
        })
    }
}


export function sendMsg({from ,to ,msg}) {

    return dispatch =>{
        socket.emit('sendmsg',{from ,to ,msg})
    }
}