const express = require("express")
const model = require("./model")
const user = model.getModel("user")



var Router = express.Router();


Router.get("/getChatList",function (req,res) {
    const userId = req.cookies.userId;
    user.find({},function (err,doc) {

        let users = []
        doc.forEach(v=>{
            users[v._id]={title:v.title,avatar:v.avatar}
        })
        console.log("doc",users)

        return{
            code:0,
            data:users
        }
    })

})


module.exports = Router