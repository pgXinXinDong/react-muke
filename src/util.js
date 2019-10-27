export function getRedirectPath({type,avatar}) {
    let url = type == "genius"?"/genius":"/Boss"

    if(!avatar){
        url += "info"
    }

    return url
}