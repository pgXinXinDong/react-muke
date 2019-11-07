const express = require("express")
const bodyParser   = require("body-parser")
const cookieParser = require("cookie-parser")
const userInfo = require("./user")

const app  = express();
const http = require("http").Server(app)
const io = require("socket.io")(http)

io.on('connection', function(socket){
    socket.on('sendmsg', function(msg){
        console.log('message: ' + msg);
    });
    console.log('a user connected');
});



app.use(bodyParser.urlencoded({extended: true}) )
app.use(bodyParser.json());
app.use(cookieParser())

app.use("/user",userInfo)





app.listen("9093",function () {
    console.log("server");
})