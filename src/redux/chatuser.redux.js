import axios from "axios"
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
                    if(res.data.data.ok && res.data.data.ok == 1){
                        return
                    }
                    return  dispatch(userList(res.data.data))
                }else{

                    return
                }
            }

       })
   }
}
