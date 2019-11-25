const express = require("express")
const bodyParser   = require("body-parser")
const cookieParser = require("cookie-parser")
const model = require('./model')
const userInfo = require("./user")
const chatInfo = require("./chat")

const app  = express();
const server = require("http").Server(app)
const io = require("socket.io")(server)


const chat = model.getModel("chat")
io.on('connection', function(socket){
    socket.on('sendmsg', function(data){
       const { from, to, msg } = data
       const chatId = [from,to].sort().join("_")
        chat.create({chatId,from,to,content:msg},function(err,doc){
            io.emit('recvMsg', Object.assign({},doc._doc))

        })

    });

});



app.use(bodyParser.urlencoded({extended: true}) )
app.use(bodyParser.json());
app.use(cookieParser())

app.use("/user",userInfo)
app.use("/chat",chatInfo)





server.listen("9093",function () {
    console.log("server");
})