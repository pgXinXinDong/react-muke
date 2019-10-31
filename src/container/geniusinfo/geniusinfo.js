import React ,{ Component } from "react"
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { NavBar,InputItem,TextareaItem ,List, Button} from "antd-mobile"
import { connect } from "react-redux"
import { update } from "../../redux/user.rudex"
@connect( state=>state.user,{update} )
class GeniusInfo extends Component{
    state={
        title:"",
        desc:""
    }

    onchange(key,v){
        this.setState({
            [key]:v
        })
    }
    render(){
        console.log("props",this.props)
        return<div>
            <NavBar mode="dark">牛人完善信息页</NavBar>
            <AvatarSelector selectAvatar={(e) => {
                this.setState({
                    avatar:e
                })

}}/>
            {   this.props.msg ? <p className="error-msg">{this.props.msg}</p>:null}
                <InputItem onChange={(v)=>this.onchange("title",v)}>求职岗位</InputItem>
                <TextareaItem
                    onChange={v => {
                        this.onchange("desc", v)
                    }}
                    title='个人见解'
                    autoHeight
                    rows={3}
            />

            <Button type="primary" onClick={()=>this.props.update(this.state)}>提交</Button>
        </div>
    }
}

export default GeniusInfo