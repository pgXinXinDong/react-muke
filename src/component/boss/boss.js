import React from "react"
import Usercarder from "../usercarder/usercarder"
import { connect } from "react-redux"
import { getUserList } from "../../redux/chatuser.redux"

@connect(state=>state.user,{getUserList})
class Boss extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("this.props",this.props.state)
        this.props.getUserList(this.props.type)
    }

    render(){
        return<Usercarder cardList = {this.props.user}/>
    }
}
export default Boss