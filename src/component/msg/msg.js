 import React from "react"
 import { connect }  from "react-redux"
 import { sendMsg } from "../../redux/chatuser.redux"

 @connect(state=>state.chatuser,{sendMsg})
 class Msg extends React.Component{
    componentDidMount(){
        this.props.sendMsg()
    }
    render(){

            console.log("this.props",this.props.sendMsg)
            return<div>
                <h1>22222</h1>
            </div>
    }
 }



 export default Msg