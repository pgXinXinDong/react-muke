import React , { Component } from "react"
import { List } from "antd-mobile"
import { connect } from "react-redux"
import { update } from "../../redux/user.rudex"
import   AvatarSelector   from "../../component/avatar-selector/avatar-selector"


@connect(state=>state.user,{update})
class BossInfo extends Component{
        render(){
           return<div>
                <AvatarSelector></AvatarSelector>
            </div>
        }
}

export default BossInfo