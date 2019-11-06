import React from "react"
import {Result, List, Button, Modal, WingBlank} from "antd-mobile"
import { connect } from "react-redux"
const Item = List.Item
const Brief = Item.Brief
const operation = Modal.operation
function headPhoto(img){
    return(
        <img src={require(`../img/${img}.png`)} />
    )
}
@connect(
    stata=>stata.user,null
)
class Info extends React.Component {

    pushOut=()=>{

        return(
            operation([
                { text: '取消', onPress: () => console.log('标为未读被点击了') },
                { text: '确定', onPress: () => console.log('置顶聊天被点击了') },
            ])
        )
    }
    render() {
        const props = this.props
        // console.log("this222",this.pushOut())
        return<Button type="primary" onClick={()=>console.log(222222)}>退出登录</Button>
        // return this.props.user?(<div><Result
        //     img={headPhoto(props.avatar)}
        //     title={props.user}
        //     message={props.type == "Boss"?props.company:null}
        // >
        // </Result>
        //     <List>
        //         <Item  multipleLine>
        //             {props.desc.split("\n").map(v=><p key={v}>{v}</p>)}
        //             {props.money?<Brief>{props.money}</Brief>:null}
        //         </Item>
        //     </List>
        //
        // </div>):null
    }

}

export default Info