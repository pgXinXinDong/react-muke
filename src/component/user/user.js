import React from "react"
import { Result } from "antd-mobile"
import { connect } from "react-redux"
const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
@connect(
    stata=>stata.user,null
)
class Info extends React.Component {
    render() {
        console.log("this.props",this.props)
        const { user ,avatar} = this.props
        return <Result
            img={require(`../img/${avatar}.png`)}
            title="支付成功"
            message={<div>998.00元 <del>1098元</del></div>}
        >

        </Result>
    }

}

export default Info