import React , { Component }from "react"
import { Grid , List } from "antd-mobile"
import PropTypes from "prop-types"


class AvatarSelector extends Component{

	state={}
	static propTypes = {
		selectAvatar:PropTypes.func
	}
	render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedge,tamus,koala,lemur,pig,tiger,whale,zebra'.split(",").map((v)=>({
            icon:require(`../img/${v}.png`),
			text:`${v}`
		}))

		const gridHeader = this.state.avatar ? (<div><span>已选择头像</span>
													<img  src={this.state.avatar.icon} style={{width:20}} alt="头像" />
												</div>):"请选择头像"
		return<div>
			<List renderHeader={()=> gridHeader}>
				<Grid data={avatarList} activeStyle={true} columnNum={5} onClick={(e) => {
				this.setState({
					avatar:e
				})
				this.props.selectAvatar(e.text)

}} />
			</List>
		</div>
	}

}

export default AvatarSelector