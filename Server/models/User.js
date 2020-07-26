const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        maxlength: 50,
    },
    lastName:{
        type: String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    institution : {
        type:String
    },
    role:{
        type: Number,
        default:0
    },
    image:String,
    token:{//토큰을 이용해서 유효성 관리
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User',userSchema);

module.exports= { User }