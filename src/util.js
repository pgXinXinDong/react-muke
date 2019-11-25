export function getRedirectPath({type,avatar,pathName}) {
    let url = type == "genius"?"/genius":"/boss"
    let nav = ["/login","/register"]
    //无头像 还没有完善信息
    if(!avatar){
        url += "info"
    }

    return url
}

export function getChatId(from,to) {
    console.log("from",from)
    console.log("to",to)
    return [from,to].sort().join("_")
}