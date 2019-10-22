const express = require("express")
const mongoose = require("mongoose")
const bodyParser   = require("body-parser")
const app  = express();
app.use(bodyParser.urlencoded({extended: true}) )
app.use(bodyParser.json());
// var DB_URL = "mongodb://localhost:27017/muke"
//
// mongoose.connect(DB_URL);
// mongoose.connection.on("connected",function () {
//     console.log("mongo  connect success")
// })
// var kittySchema = mongoose.Schema({
//     name: String
// });


// kittySchema.methods.speak = function(){
//     var greeting = this.name ?
//         "this is name"+this.name:"i dont have name"
//     console.log(greeting)
// }
//
// var Kitten = mongoose.model('Kitten', kittySchema);
// var fluffy = new Kitten({name:"fluffy"})
//
// console.log("felyne",fluffy.name)
//
//
// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
// });

app.get("/user",function (req,res) {
    res.send({
        code:3
    })
})

app.post("/user",function (req,res,next) {
    console.log("req",req)
    res.send({
        code:0,
        body:{}
    })
})

app.listen("9093",function () {
    console.log("server");
})