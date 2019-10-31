import  axios from "axios"
import { getRedirectPath }from "../util"
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const SWITCH_PAGE = "SWITCH_PAGE"


const initData = {
    redirectTo:"",
    user:"",
    pwd:"",
    repeatpwd:"",
    type:"",
    msg:"",
    avatar:""
}


export function user(state = initData, action){
    switch (action.type){
        case LOGIN_SUCESS :
            return {...initData,msg:"",...action.payload,redirectTo:getRedirectPath({...action.payload})}
        case REGISTER_SUCCESS:
            return {...initData,msg:"",...action.payload,redirectTo:getRedirectPath({...action.payload})}
        case ERROR_MSG :
                return {...initData,msg:action.data}
        case LOAD_DATA:return  { ...initData,msg:"",...action.payload}
        case SWITCH_PAGE: return {...initData,msg:action.data}
        default:
            return initData
    }
}


export function logoData(data) {
    return { type:LOAD_DATA, payload:data}
}

function errorMsg(data){
    return { type:ERROR_MSG,data}
}
function registerSuccess(data) {
    return {type:REGISTER_SUCCESS,payload:data}
}
function loginSuccess(data){
    return {type:LOGIN_SUCESS,payload:data}
}
export  function switchToPage() {
    return {type:SWITCH_PAGE,data:""}
}

export function update(data) {
        if(data.title == "" || data.avatar == ""|| typeof data.avatar == "undefined") {
            return errorMsg("请完善信息")
        }

        return dispatch =>{
            axios.post("/user/update",data).then(res=>{
                console.log("res",res)
                if(res.status == 200 ){
                    if(res.data.code == 0){
                        dispatch(logoData(data))
                    }
                }
        })}

}

export  function login({user,pwd}) {
    if(!user||!pwd){
        return errorMsg("用户名或密码有误")
    }

    return dispatch =>{
        axios.post("/user/login",{user,pwd}).then(res=>{
            if(res.status == 200 && res.data.code == 0){
                dispatch(loginSuccess(res.data.data));
            }else{
                dispatch(errorMsg(res.data.msg))
            }

        })
    }

}

export function register({user,pwd,repeatpwd,type}){
    if(!user || !pwd || !type) {
         return errorMsg("用户名密码必须输入")
    }
    if(pwd !== repeatpwd){
        return errorMsg("密码不一致")
    }

    return dispatch =>{
        axios.post("/user/register",{user,pwd,type}).then(res=>{
            //用户名已存在
            if(res.status == 200 && res.data.code == 0){
                dispatch(registerSuccess({user,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }

        })
    }


}
