import React from "react"
import {Result, List, Button, Modal, WingBlank} from "antd-mobile"


const operation = Modal.operation
class Info extends React.Component{
    constructor(props){
        super(props)
    }
    pushOut=()=>{
        console.log(2222)
        return(
            operation([
                { text: '取消', onPress: () => console.log('标为未读被点击了') },
                { text: '确定', onPress: () => console.log('置顶聊天被点击了') },
            ])
        )
    }
    render() {
        const props = this.props
        console.log("props",props)
        return<Button type="primary" onClick={this.pushOut.bind(this)}>退出2登录</Button>

    }

}

export default Info