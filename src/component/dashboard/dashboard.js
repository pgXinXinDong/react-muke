import React, { Component } from "react"
import { NavBar,TabBar,Card } from "antd-mobile"
import { connect } from "react-redux"
import { withRouter ,Switch ,Route} from "react-router-dom"
import LinkBarNav from "../navlink/navlink"
import Boss from "../boss/boss"
import Genius from "../genius/genius"


function Info() {
    return<h1>Info</h1>
}

function Msg() {
    return<h1>Msg</h1>
}


@withRouter
@connect(state=>state.user,null)
class DashBoard extends Component{
    render(){
        let pathname = this.props.location.pathname.toLowerCase()
        let User = this.props.type;
        console.log("pathname",pathname)
        if(pathname =="/"){
           return this.props.history.push("/login")
        }
        let navLink = [

            {
                title:"Boss列表",
                icon:"boss",
                path:"/boss",
                hide:User == "Boss",
                component:Boss
            },
            {
                title:"牛人列表",
                icon:"job",
                path:"/genius",
                hide:User =="genius",
                component:Genius
            },
            {
                title:"消息",
                icon:"msg",
                path:"/msg",
                component:Msg
            },
            {
                title:"个人中心",
                icon:"user",
                path:"/me",
                component:Info
            }
        ]
        return<div className="footer-header-bar">
            <NavBar mode="dark" className="fixd-header">{navLink.find((v)=>v.path != pathname).title}</NavBar>
            <div style={{marginTop:45}}>
                  <Switch>
                      {
                          navLink.map(function (v) {
                              return<Route key={v.path} path={v.path} component={v.component} ></Route>
                          })
                      }
                  </Switch>
            </div>
            <LinkBarNav data = { navLink }></LinkBarNav>
        </div>
    }
}

export default DashBoard