import React from "react"
import {Result, List, Button, Modal, WingBlank} from "antd-mobile"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { logout } from "../../redux/user.rudex"
import { claerUserList} from "../../redux/chatuser.redux"
import BrowserCookies from "browser-cookies"
import Boss from "../boss/boss";
const Item = List.Item
const Brief = Item.Brief
const alert = Modal.alert
function headPhoto(img){
    return(
        <img src={require(`../img/${img}.png`)} />
    )
}
@connect(
    stata=>stata.user,
    { logout,claerUserList }
)
class Info extends React.Component {
    pushOut=()=>{
        return(
            alert('注销', '确认退出登录吗???', [
                { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                { text: '确定', onPress: () => {
                        BrowserCookies.erase("userId");
                        // 还原数据
                        // this.props.claerUserList()
                        this.props.logout()
                    } },
            ])
        )
    }
    render() {
        const props = this.props
        return this.props.user?(<div><Result
            img={headPhoto(props.avatar)}
            title={props.user}
            message={props.type == "Boss"?props.company:null}
        >
        </Result>
            <List>
                <Item  multipleLine>
                    {props.desc.split("\n").map(v=><p key={v}>{v}</p>)}
                    {props.money?<Brief>{props.money}</Brief>:null}
                </Item>
            </List>
            <Button onClick={this.pushOut}>退出</Button>
        </div>):<Redirect to={props.redirectTo}> </Redirect>
    }

}

export default Info