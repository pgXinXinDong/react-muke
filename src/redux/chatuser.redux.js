import axios from "axios"
const io = require("socket.io-client")
const socket = io('ws://localhost:9093')
const USER_LIST = "USER_LIST"
const CLEARUSERLIST ="CLEARUSERLIST"
const initData = {
    userList:[]
}

export function chatuser(stata = initData,data) {
        switch (data.type) {
            case USER_LIST:
                return {...stata,userList:data.payload}
            case CLEARUSERLIST:
                return {...initData}
            default:
                return stata

        }
}

export function userList(data){
    return{type:USER_LIST,payload:data}
}
export function claerUserList() {
    return {type:CLEARUSERLIST}
}

export  function getUserList(type){
   return dispatch =>{
        axios.post("user/getUserList",{type:type}).then(res=>{
            if(res.status == 200){
                if(!res.data.code){
                    return  dispatch(userList(res.data.data))
                }else{

                    return
                }
            }

       })
   }
}

export function sendMsg(msg) {
    return dispatch =>{
        socket.emit('sendmsg',{msg})
    }

}