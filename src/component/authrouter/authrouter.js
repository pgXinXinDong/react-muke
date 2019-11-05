import   React  from "react"
import { withRouter }  from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import { loadData } from "../../redux/user.rudex";



@withRouter
@connect(null,{ loadData })
class AuthRouter extends React.Component{
    componentDidMount(){
        let publicList = ["/login","/register"];
        let pathName = this.props.location.pathname

        if(publicList.indexOf(pathName) > -1){
            console.log("authRouter")
            return null
        }
        axios.get("/user/info").then(res=>{
            if(res.status == 200 ){
                if(res.data.code == 0){
                    //已经登录
                    this.props.loadData(res.data)
                }else{
                    console.log("authRouter22")
                    this.props.history.push("/login")
                }
            }

        })

    }
    render(){
        return null
    }
}



export default AuthRouter