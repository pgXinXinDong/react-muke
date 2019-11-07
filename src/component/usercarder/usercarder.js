import React from "react"
import { Card ,List} from "antd-mobile"
import  PropTypes from "prop-types"
const Header = Card.Header;
const Body = Card.Body;
const Item = List.Item
const Brief = Item.Brief;
class Usercarder extends React.Component{
    static propTypes = {
        userList: PropTypes.array.isRequired
    }

    render(){
        return<div>
            {
                this.props.userList.map((v)=>{
                    return(
                        !v.avater?<Card key={v.title}>
                            <Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            >
                            </Header>
                            <Body>
                                <List>
                                    <Item>
                                        介绍 <Brief>{v.desc.split("\n").map((d,i)=>{
                                            return<p key={i}>{d}</p>
                                    })}</Brief>
                                    </Item>
                                </List>
                            </Body>
                        </Card>:null
                    )
                })
            }

        </div>
    }
}



export default Usercarder