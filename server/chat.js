const express = require("express")
const model = require("./model")
const user = model.getModel("user")
const chat = model.getModel("chat")


var Router = express.Router();

Router.get("/getChatMsgList",function (req,res) {
    let userId = req.cookies.userId
    chat.find({'$or':[{from:userId},{to:userId}]},function (err,doc) {
        if(err) {
            console.log(err)
            return
        }
        return res.send({
            code:0,
            data:doc
        })
    })

})
Router.post("/getChatUser",function (req,res) {
    var chartUserId = req.body.userId

    let users = {};
    user.findById(chartUserId,function (err,doc) {
        if(err){
            return{
                code:1,
                data:{msg:"没有找到此用户"}
            }
        }
        return res.send({
            code:0,
            data:{
                user:doc.user,
                avatar:doc.avatar
            }
        })


    })
})


module.exports = Router