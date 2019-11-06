import React from "react"
import Usercarder from "../usercarder/usercarder"
import { connect } from "react-redux"
import { getUserList }from "../../redux/chatuser.redux"

@connect(state=>state.chatuser,{getUserList})
class Genius extends React.Component{
    componentDidMount(){
        this.props.getUserList("Boss")

    }
    render(){
        return<Usercarder userList={this.props.userList}/>
    }
}
export default Genius