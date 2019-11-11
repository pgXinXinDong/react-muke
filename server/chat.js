const express = require("express")
const model = require("./model")
const user = model.getModel("user")



var Router = express.Router();


Router.post("/getChatList",function (req,res) {
    const userId = req.cookies.userId;
    console.log("req",req.cookies);
    console.log("userId",userId);

})


module.exports = Router