import axios from "axios"
const USER_LIST = "USER_LIST"


export function chatuser(data) {

}

export function userList(data){
    return{type:USER_LIST,payload:data}
}

function getUserList(type){
   return dispatch =>{
       axios.post("user/getUserList",{type:type}).then(res=>{
            dispatch({})
       })
   }


}
