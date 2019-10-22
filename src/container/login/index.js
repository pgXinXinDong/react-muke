import  React from "react"
import Logo from "../../component/logo/logo"
import {Button ,WhiteSpace, WingBlank, List, InputItem} from "antd-mobile"


class Login extends React.Component{
    constructor(props){
        super(props)
    }
    rigeister = ()=>{
        console.log(this.props)
        this.props.history.push("/register")
    }
    render() {
        return <div>
            <Logo/>
            <WingBlank>
            <List>
                <InputItem>用户名</InputItem>
            </List>
            <WhiteSpace size="lg"/>
            <List>
                <InputItem>密码</InputItem>
            </List>
                <WhiteSpace size="lg"/>
                <Button type="primary">登录</Button>
                <WhiteSpace/>
                <Button type="primary" onClick={this.rigeister}>注册</Button>
            </WingBlank>


        </div>
    }
}

export default Login