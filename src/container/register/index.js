import React from "react"
import {WingBlank, Button, List, InputItem, WhiteSpace, Radio} from "antd-mobile"
import { Redirect } from "react-router-dom"
import Logo from "../../component/logo/logo";
import { connect } from "react-redux"
import {register,switchToPage} from "../../redux/user.rudex"
@connect(state=>state.user,{register,switchToPage})
class Register extends React.Component {
    state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius' // 或者boss
        }
    componentDidMount(){
        this.props.switchToPage()
    }

    handleChange(key,v){
        this.setState({
            [key]:v
        })
    }
    handleRegister=()=>{
            this.props.register(this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem;
        const Item = List.Item
        return <div>
            {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
            <Logo/>
            <WingBlank>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                <List className="my-list">
                    <WhiteSpace size="lg"/>
                    <InputItem onChange={(v)=>this.handleChange("user",v)}>用户名</InputItem>
                    <WhiteSpace size="sm"/>
                    <InputItem onChange={(v)=>this.handleChange("pwd",v)}>密码</InputItem>
                    <WhiteSpace size="sm"/>
                    <InputItem onChange={(v)=>this.handleChange("repeatpwd",v)}>确认密码</InputItem>
                    <WhiteSpace size="sm"/>
                    <RadioItem onChange={(v)=>this.handleChange("type","genius")} checked={this.state.type == "genius"}>牛人</RadioItem>
                    <WhiteSpace size="sm"/>
                    <RadioItem onChange={(v)=>this.handleChange("type","Boss")} checked={this.state.type == "Boss"}>Boss</RadioItem>
                </List>
                <WhiteSpace size="lg"/>
                <Button type="primary" onClick={this.handleRegister}>注册</Button>
            </WingBlank>
        </div>
    }
}

export default Register