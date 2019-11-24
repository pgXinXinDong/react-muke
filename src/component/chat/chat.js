import React from "react"
import {List,InputItem ,NavBar,Icon} from "antd-mobile"
import { connect } from "react-redux"
import { sendMsg,recvMsg ,getChatList} from "../../redux/chat.reudex"

@connect(state=>state,{sendMsg,recvMsg,getChatList})
class Chat extends React.Component{
    state={
        text:"",
        // toUser:{}
    }
    componentDidMount(){
        let userId = this.props.match.params.user
        let userList = this.props.chatuser.userList;
        let toUser = userList.filter(item=>{
            return item[userId] = userId
        })
        this.setState({
            toUser:toUser
        })
        this.props.getChatList(userId)
        this.props.recvMsg()
    }

    handelSubmit(){
        const from = this.props.user._id;
        const to = this.props.match.params.user;
        const msg = this.state.text;
        this.props.sendMsg({from,to,msg});

    }

    render(){
        let toUser = this.props.chat.users;
        const chatmsg = this.props.chat.chatmsg;
        const Item = List.Item
        return<div>
            <NavBar
                mode="dark"
                icon = {<Icon type="left"/>}
                onLeftClick = {()=>this.props.history.goBack()}
            >
                { toUser?toUser.user:null}
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