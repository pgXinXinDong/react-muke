import React from "react"
import {WingBlank, Button, List, InputItem, WhiteSpace, Radio} from "antd-mobile"
import Logo from "../../component/logo/logo";

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            type: "genius"
        }
    }

    render() {
        const RadioItem = Radio.RadioItem;
        const Item = List.Item
        return <div>
            <Logo/>
            <WingBlank>
                <List className="my-list">
                    <InputItem>用户名</InputItem>
                    <WhiteSpace size="sm"/>
                    <InputItem>密码</InputItem>
                    <WhiteSpace size="sm"/>
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace size="sm"/>
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace size="sm"/>
                    <RadioItem checked={this.state.type == "genius"}>牛人</RadioItem>
                    <WhiteSpace size="sm"/>
                    <RadioItem checked={this.state.type == "Boss"}>Boss</RadioItem>
                </List>
                <WhiteSpace size="lg"/>
                <Button type="primary">注册</Button>
            </WingBlank>
        </div>
    }
}

export default Register