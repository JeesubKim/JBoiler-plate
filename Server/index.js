const express = require("express")
const app = express();
const MongoDBManager = require("./models/MongoDB")

const port = 5000
const {User} = require("./models/User");
const bodyParser = require("body-parser");



const mongodb = new MongoDBManager();
mongodb.connect();


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

app.get("/", (req,res)=> res.send("Hello JBoilerPlate!"));


//화원 가입을 위한 router
app.post("/register",(req,res)=>{    
    //회원가입시 필요한 정보를 client에서 가져와서 DB에 넣어주기
    const user = new User(req.body);
    console.log(user);
    user.save((err,userInfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        });
    })
})

app.listen(port,()=>console.log("Started"));