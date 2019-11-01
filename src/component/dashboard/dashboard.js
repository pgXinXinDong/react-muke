import React, { Component } from "react"
import { NavBar,TabBar,Card } from "antd-mobile"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
@withRouter
@connect(state=>state.user,null)
class DashBoard extends Component{
    render(){
        console.log(11,this.props)
        var pathname = this.props.location.pathname
        var Item = TabBar.Item
        var navLink = [
            {
                title:"牛人列表",
                icon:"boss",
                path:"/Boss",
                hide:pathname == "/genius"
            },
            {
                title:"BOSS列表",
                icon:"job",
                path:"/genius",
                hide:pathname =="/Boss"
            },
            {
                title:"消息",
                icon:"msg",
                path:"/msg"

            },
            {
                title:"个人中心",
                icon:"user",
                path:"/me"
            }
        ]
        navLink = navLink.filter((v)=>!v.hide)
        return<div>
            <NavBar mode="dark" className="fixd-header">{this.props.type == "Boss"?"genius":"Boss"}</NavBar>
            <TabBar>
                {navLink.map((v)=>{
                    return<Item
                        key={v.title}
                        title={v.title}
                        icon={{uri:require(`../img/navLink/img/${v.icon}.png`)}}
                        selectedIcon={{uri:require(`../img/navLink/img/${v.icon}-active.png`)}}
                        selected = {v.path === pathname}
                        onPress = {()=>this.props.history.push(v.path)}
                    >
                    </Item>
                })}
            </TabBar>
        </div>
    }
}

export default DashBoard