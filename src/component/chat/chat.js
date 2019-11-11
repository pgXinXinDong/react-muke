import React from "react"
import {List,InputItem ,NavBar,Icon} from "antd-mobile"
import { connect } from "react-redux"
import { sendMsg,recvMsg ,getChatList} from "../../redux/chat.reudex"

@connect(state=>state,{sendMsg,recvMsg,getChatList})
class Chat extends React.Component{
    state={
        text:""
    }
    componentDidMount(){
        this.props.getChatList()
        this.props.recvMsg()
    }

    handelSubmit(){

        const from = this.props.user._id;
        const to = this.props.match.params.user;
        const msg = this.state.text;
        this.props.sendMsg({from,to,msg});

    }

    render(){
        const from = this.props.match.params.user
        const chatmsg = this.props.chat.chatmsg;

        const Item = List.Item
        return<div>
            <NavBar
                mode="dark"
                icon = {<Icon type="left"/>}
                onLeftClick = {()=>this.props.history.goBack()}
            >
                { from }
            </NavBar>
            <List>
                {chatmsg.map(v=>{
                   return <Item key = {v._id}>{v.content}</Item>
                })}

            </List>
            <List className="stick-footer">
                <InputItem
                 placeholder="请输入"
                 value={this.state.text}
                 onChange={(v)=>{
                     this.setState({
                         text:v
                     })
                 }}
                 extra = {
                     <div>
                         <span onClick={()=>this.handelSubmit()}>发送</span>
                     </div>
                 }
                >

                </InputItem>
            </List>
        </div>
    }
}

export default Chat