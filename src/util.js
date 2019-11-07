export function getRedirectPath({type,avatar,pathName}) {
    let url = type == "genius"?"/genius":"/boss"
    let nav = ["/login","/register"]
    //无头像 还没有完善信息
    if(!avatar){
        url += "info"
    }




    return url
}