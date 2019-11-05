import React from "react"
import Usercarder from "../usercarder/usercarder"
import { connect } from "react-redux"

@connect(state=>state.user)
class Genius extends React.Component{
    constructor(props){
        super(props)
        console.log("this.props",props)
    }
    render(){
        return<Usercarder/>
    }
}
export default Genius