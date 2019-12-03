import io from "socket.io-client"
import axios from "axios"
const socket = io("ws://localhost:9093")
const MSG_RECV ="MSG_RECV"
const MSG_GETCHATLIST="MSG_GETCHATLIST"
const MSG_GETCHATUSER = "MSG_GETCHATUSER"
const MSG_GETCHAHMSGLIST = "MSG_GETCHAHMSGLIST"
const MSG_READ ="MSG_READ"

const initDat = {
    chatmsg:[],
    users:{},
    unread:0
}

export function chat(state=initDat,action) {

    switch (action.type){
        case MSG_GETCHAHMSGLIST:
            return {...state,chatmsg:action.payload,unread:action.payload.filter(v=>!v.read && v.to == action.payload.userid).length}
        case MSG_RECV:
            const n = action.payload.to == action.userid ? 1 : 0
            return { ...state,chatmsg:[...state.chatmsg,action.payload],userid:action.userId,unread:state.unread+n }
        case  MSG_GETCHATUSER:
            return {...state,users:action.payload}
        case MSG_READ:
            const { from , num } = action.payload
            return {...state,chatmsg:state.chatmsg.map(v=>({...v,read:from == v.from?true:v.read})),unread : state.unread - num }
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

function msgRead({from,userid,num}) {
    return {type:MSG_READ,payload:{from,userid,num}}
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
            console.log("res",res)
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

export function readMsg(from) {
    return (dispatch,getState)=>{
        axios.post("/chat/readMsg",{from}).then(res=>{
            var userid = getState().user._id;

            if(res.status == 200 && res.data.code == 0){
                dispatch(msgRead({userid,from,num:res.num}))
            }
        })
    }
}

export function sendMsg({from ,to ,msg}) {
    return dispatch =>{
        socket.emit('sendmsg',{from ,to ,msg})
    }
}