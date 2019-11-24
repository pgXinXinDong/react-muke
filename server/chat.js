const express = require("express")
const model = require("./model")
const user = model.getModel("user")



var Router = express.Router();


Router.post("/getChatList",function (req,res) {
    console.log(2222,req.body)
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