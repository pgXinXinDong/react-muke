import React from "react"
import Usercarder from "../usercarder/usercarder"
import { connect } from "react-redux"

@connect(state=>state.user)
class Boss extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return<Usercarder cardList = {this.props.user}/>
    }
}
export default Boss