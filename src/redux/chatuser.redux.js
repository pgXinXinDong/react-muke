import axios from "axios"
const USER_LIST = "USER_LIST"
const initData = {
    userList:[]
}

export function chatuser(stata = initData,data) {
        switch (data.type) {
            case USER_LIST:
                return {...stata,userList:{...data.payload}}
            default:
                return initData

        }
}

export function userList(data){
    return{type:USER_LIST,payload:data}
}

export  function getUserList(type){
   return dispatch =>{
       axios.post("user/getUserList",{type:type}).then(res=>{
            dispatch(userList(res.data))
       })
   }


}
