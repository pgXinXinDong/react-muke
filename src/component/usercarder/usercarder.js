import React from "react"
import { Card } from "antd-mobile"
class Usercarder extends React.Component{
     constructor(props){
         super(props);
         console.log("props",this.props)
     }

    render(){
        let Header = Card.Header;
        let Body = Card.Body;
        let Footer = Card.Footer
        return<div>
            <Card>
                <Header
                    title="this is title"
                    thumb={require("../img/boy.png")}
                    extra={<span>this is extra</span>}
                >
                </Header>
                <Body>
                    <h1>This is content of `Card`</h1>
                </Body>
                <Footer content="content" extra={<span>22222</span>}/>
            </Card>
        </div>
    }
}



export default Usercarder