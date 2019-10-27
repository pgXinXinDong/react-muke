const mongoose = require("mongoose")
const db_user = "mongodb://localhost:27017/muke"

mongoose.connect(db_user)

const models = {
    user:{
        'user':{type:String,'require':true},
        "pwd":{type:String,'require':true},
        'type':{'type':String, 'require':true},
        'avatar':{'type':String},  //头像
    },
    chat:{

    },
    speak:{}
}

for(let m in models){
     mongoose.model(m,new mongoose.Schema(models[m]))
}


module.exports = {
    getModel:function (name) {
        return mongoose.model(name)
    }
}