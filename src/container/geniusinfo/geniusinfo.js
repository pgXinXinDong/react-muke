import React ,{ Component } from "react"
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { NavBar,} from "antd-mobile"

class GeniusInfo extends Component{

    render(){
        return<div>
            <NavBar mode="dark">牛人完善信息页</NavBar>
            <AvatarSelector></AvatarSelector>
        </div>
    }
}

export default GeniusInfo