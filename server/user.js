const express = require("express")
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel("user")
const _filter ={ "pwd":0,"__id":0}
const cookieConfig = { expires: new Date(Date.now() + 9000000), httpOnly: true }
Router.get("/info",function (req,res) {
    const { userId } = req.cookies;
    console.log("userId",userId)
    if(!userId){
       return res.send({
            code:1,
            msg:"请先登录"
        })
    }
    // 通过userId 查询数据库
    User.findOne({_id:userId},_filter,function (err,doc) {
        if(!doc){
         return   res.send({
                code:1,
                msg:"后台有错"
            })
        }
        if(doc){
           return res.send({
                code:0,
                data:doc
            })
        }
    })

})
Router.post("/login",(req,res,next)=>{
    let {user,pwd} = req.body;
    User.findOne({user,pwd:md5Pwd(pwd)},_filter ,function(err,doc){
        if(!doc){
            return  res.send({
                code:1,
                msg:"用户不存在"
            })
        }else {
            res.cookie("userId",doc._id,cookieConfig);
          return  res.send({
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
            return res.send({
                code:1,
                msg:"用户名已存在"
            })
        }
        //md5 对数据库密码加密

        const userModel = new User({user,pwd:md5Pwd(pwd),type});
        userModel.save(function(err,doc){
            if(err){
              return  res.send({
                    code:1,
                    msg:"后端出错了"
                })
            }
            const { user,type,_id } = doc
            res.cookie("userId",_id,cookieConfig)
            return res.json({
                code:0,
                data:{user,type,_id}
            })

        })

    })
})
Router.post("/update",(req,res,next)=>{

    const userId = req.cookies.userId;
    const updata = req.body
    User.findByIdAndUpdate(userId,updata,{ "pwd":0,"__id":0},(err,doc)=>{
        console.log("doc",doc)
        if(doc){
            return res.send({
                code:0,

            })
        }
    })
})
function md5Pwd(pwd){
//    加严
    var salt ='imooc_is_good_3957x8yza6!@#IUHJh~~'
    return utils.md5(utils.md5(salt+pwd))
}

module.exports = Router