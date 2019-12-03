import React from "react"
import {List,InputItem ,NavBar,Icon,ListView } from "antd-mobile"
import { connect } from "react-redux"
import  QueueAnim from "rc-queue-anim"

import { sendMsg,recvMsg ,getChatUser,getChatMsgList,readMsg} from "../../redux/chat.reudex"

@connect(state=>state,{sendMsg,recvMsg,getChatUser,getChatMsgList,readMsg})
class Chat extends React.Component{
    state={
        text:"",
    }
    componentWillMount(){
        const to = this.props.match.params.user
        this.props.readMsg(to)
    }
    componentDidMount(){
        let userId = this.props.match.params.user
        this.props.getChatMsgList()
        this.props.getChatUser(userId)
        this.props.recvMsg()
    }

    handelSubmit(){
        const from = this.props.user._id;
        const to = this.props.match.params.user;
        const msg = this.state.text;
        this.props.sendMsg({from,to,msg});
        this.setState({
            text:""
        })

    }

    render(){
        let toUser = this.props.chat.users;
        const chatmsg = this.props.chat.chatmsg;
        const userId = this.props.user._id;
        const userVatar = this.props.user.avatar
        const Item = List.Item
        return<div id='chat-page'>
            <NavBar
                mode="dark"
                icon = {<Icon type="left"/>}
                onLeftClick = {()=>this.props.history.goBack()}
            >
                { toUser?toUser.user:null }
            </NavBar>
            {/*<ListView>*/}
                <QueueAnim delay={50}>
                            {chatmsg.map(v=>{
                                return v.from == userId?
                                    <List key={v._id}> <Item thumb={userVatar?require(`../img/${userVatar}.png`):null}  className="chat-me"  key = {v._id}>{v.content}</Item> </List>:
                                    <List><Item thumb={toUser.avatar?require(`../img/${toUser.avatar}.png`):null} key = {v._id}>{v.content}</Item> </List>
                            })}


                </QueueAnim>
            {/*</ListView>*/}
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