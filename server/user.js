const express = require("express")
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel("user")


Router.get("/info",function (req,res) {
    res.send({
        code:1,
        msg:"请登录"
    })
})
Router.post("/login",(req,res,next)=>{
    let {user,pwd} = req.body;
    User.findOne({user},function(err,doc){
        console.log("doc",doc)
        if(!doc){
            res.send({
                code:1,
                msg:"用户不存在"
            })
        }else {
            res.send({
                code:0,
                data:doc
            })
        }

    })
})
Router.post("/register",(req,res,next)=>{
    const { user , pwd , type } = req.body;
    //查询数据可
    User.findOne({user},function (err,doc) {
        //err ???  doc:表  无:null 有:对应的数据
        if(doc){
            res.json({
                code:1,
                msg:"用户名已存在"
            })
        }
        //md5 对数据库密码加密
        const userModel = new User({user,pwd:md5Pwd(pwd),type});
        userModel.save(function(err,doc){
            if(err){
                res.send({
                    code:1,
                    msg:"后端出错了"
                })
            }
            const { user,type,_id } = doc
            res.json({
                code:0,
                data:{user,type,_id}
            })

        })

    })
})
function md5Pwd(pwd){
//    加严
    var salt ='imooc_is_good_3957x8yza6!@#IUHJh~~'
    return utils.md5(utils.md5(salt+pwd))
}

module.exports = Router