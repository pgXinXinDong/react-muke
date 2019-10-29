import  React from "react"
import Logo from "../../component/logo/logo"
import {Button ,WhiteSpace, WingBlank, List, InputItem} from "antd-mobile"
import {Redirect} from "react-router-dom"
import { login ,switchToPage} from "../../redux/user.rudex"
import { connect } from "react-redux"

@connect(state=>state.user,{login,switchToPage})
class Login extends React.Component{
    state={
        user:"",
        pwd:""
    }
    componentDidMount(){
        this.props.switchToPage()
    }
    rigeister = ()=>{
        this.props.history.push("/register")
    }

    handelLogin = ()=>{
        console.log(this.props)
        this.props.login(this.state)
    }
    handelChange = (key,v)=>{
        this.setState({
            [key]:v
        })
    }

    render() {
        return <div>
            <Logo/>
            {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
            <WingBlank>
            <List>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                <InputItem onChange={(v)=> this.handelChange("user",v)}>用户名</InputItem>
                <WhiteSpace size="lg"/>
                <InputItem onChange={(v)=> this.handelChange("pwd",v)}>密码</InputItem>
            </List>
                <WhiteSpace size="lg"/>
                <Button type="primary" onClick={this.handelLogin}>登录</Button>
                <WhiteSpace/>
                <Button type="primary" onClick={this.rigeister}>注册</Button>
            </WingBlank>


        </div>
    }
}

export default Login