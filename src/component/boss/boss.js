import React from "react"
import Usercarder from "../usercarder/usercarder"
import { connect } from "react-redux"
import { getUserList } from "../../redux/chatuser.redux"


@connect(state=>state.chatuser,{getUserList})
class Boss extends React.Component{
    componentDidMount(){
        this.props.getUserList("genius",)

    }


    render(){
        return<Usercarder userList = {this.props.userList}/>
    }
}
export default Boss