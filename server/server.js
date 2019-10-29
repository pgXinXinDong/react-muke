const express = require("express")
const bodyParser   = require("body-parser")
const cookieParser = require("cookie-parser")
const app  = express();
const userInfo = require("./user")
app.use(bodyParser.urlencoded({extended: true}) )
app.use(bodyParser.json());
app.use(cookieParser())

app.use("/user",userInfo)





app.listen("9093",function () {
    console.log("server");
})