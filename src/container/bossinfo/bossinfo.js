import React , { Component } from "react"
import { List ,InputItem,TextareaItem,Button,WhiteSpace} from "antd-mobile"
import { connect } from "react-redux"
import { update } from "../../redux/user.rudex"
import   AvatarSelector   from "../../component/avatar-selector/avatar-selector"


@connect(state=>state.user,{update})
class BossInfo extends Component{
        state={

        }
        onChange(key,v){
            this.setState({
                [key]:v
            })
        }
        render(){
           return<div>
                <AvatarSelector selectAvatar={(el)=>{
                    this.setState({
                        avatar:el
                    })
                }}></AvatarSelector>
               <List>
                    <InputItem onChange={(v)=>{this.onChange("title",v)}}>
                     招聘信息
                    </InputItem>
                   <WhiteSpace size="xl" />
                   <InputItem onChange={(v)=>{this.onChange("company",v)}}>
                       公司名称
                   </InputItem>
                   <WhiteSpace size="xl" />
                   <InputItem onChange={(v)=>{this.onChange("money",v)}}>
                       职位薪资
                   </InputItem>
                   <WhiteSpace size="xl" />
                   <TextareaItem
                    onChange={(v)=>{this.onChange("desc",v)}}
                    title="职位要求"
                    autoHeight
                    data-seed="logId"
                    rows="3"
                   >
                   </TextareaItem>
                   <WhiteSpace size="xl" />
                   <Button type="primary" onClick={()=>this.props.update(this.state)}> 提交 </Button>
               </List>
            </div>
        }
}

export default BossInfo