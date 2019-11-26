import io from "socket.io-client"
import axios from "axios"
const socket = io("ws://localhost:9093")
const MSG_RECV ="MSG_RECV"
const MSG_GETCHATLIST="MSG_GETCHATLIST"
const MSG_GETCHATUSER = "MSG_GETCHATUSER"
const MSG_GETCHAHMSGLIST = "MSG_GETCHAHMSGLIST"

const initDat = {
    chatmsg:[],
    users:{}

}

export function chat(state=initDat,action) {

    switch (action.type){
        case MSG_RECV:
            return { ...state,chatmsg:[...state.chatmsg,action.payload],userid:action.userId }
        case MSG_GETCHAHMSGLIST:
            return {...state,chatmsg:[...state.chatmsg,...action.payload],userid:action.userId}
        case  MSG_GETCHATUSER:
            return {...state,users:action.payload}
        default:
            return state
    }
}

function msgRecv(userid,data) {
    return {userid:userid,type:MSG_RECV,payload:data}
}

function msgGetChatUser(data){
    return {type:MSG_GETCHATUSER,payload:data}
}

function msgGetChatMsgList(data,userid){
    return {userid:userid,type:MSG_GETCHAHMSGLIST,payload:data}
}

export  function getChatUser(userId) {
  return dispatch => axios.post("/chat/getChatUser",{userId:userId})
        .then(res=>{
            dispatch(msgGetChatUser(res.data.data))
        })
}
export function getChatMsgList() {
    return (dispatch,getState) => axios.get("/chat/getChatMsgList").then(res=>{
        if(res.status && res.status == 200){
            var userid  = getState().user._id;
            if(res.data.data.ok && res.data.data.ok == 1){
                return
            }
            dispatch(msgGetChatMsgList(res.data.data,userid))
        }

    })
}

export function recvMsg(){
   return (dispatch,getState) =>{
        socket.on("recvMsg",function(data){
            let  userid =  getState().user._id
            dispatch(msgRecv(userid,data))
        })
    }
}


export function sendMsg({from ,to ,msg}) {
    return dispatch =>{
        socket.emit('sendmsg',{from ,to ,msg})
    }
}