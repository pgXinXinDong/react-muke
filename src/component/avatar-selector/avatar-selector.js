import React , { Component }from "react"
import { Grid  } from "antd-mobile"
class AvatarSelector extends Component{

	render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(",").map((v)=>({
            icon:require(`../img/${v}.png`),
			text:`name${v}`
		}))

		return<div>
			<Grid data={avatarList} activeStyle={false}></Grid>
		</div>
	}

}

export default AvatarSelector