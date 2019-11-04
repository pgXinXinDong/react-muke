export function getRedirectPath({type,avatar}) {
    let url = type == "genius"?"/genius":"/boss"

    if(!avatar){
        console.log("22222")
        url += "info"
    }


    return url
}