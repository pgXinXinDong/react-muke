import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { add_gun ,remove_gun} from "../action/counter";
import { Button } from "antd-mobile"


export default @connect((data) =>({
    gun : data.counter
}),(dispatch) =>({
    add_gun : bindActionCreators(add_gun,dispatch),
    remove_gun: (remove_gun,dispatch)
}))
class Qibinglian extends React.Component{
    state = {
        list:[]
    }
    render(){
        return<div>
            <Button type="primary" onClick={this.props.add_gun.bind(this,1)} >添加</Button>
            <h1>{this.props.gun}</h1>
        </div>
    }
}

