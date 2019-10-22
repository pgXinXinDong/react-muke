var express = require("express")
var mongoose = require("mongoose")
var app  = express();

var DB_URL = "mongodb://localhost:27017"

mongoose.connect(DB_URL);
mongoose.connection.on("connected",function () {
    console.log("mongo  connect success")
})

app.get("/user",function (req,res) {
    res.send({
        code:3
    })
})

app.listen("9093",function () {
    console.log("server");
})