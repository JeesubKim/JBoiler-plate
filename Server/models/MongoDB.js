const mongoose = require('mongoose');
const config = require('../config/key');
class MongoDBManager{

    constructor(){
        this.db = mongoose.connection;
        this.db.on('error',console.error);
        this.db.once('open',()=>{
            console.log("mongodb connected");
        })
        mongoose.set("useCreateIndex",true);
    }

    connect(){
        mongoose.connect(config.mongoDBPath,{ useNewUrlParser: true,  useUnifiedTopology: true ,useCreateIndex:true,useFindAndModify:false});
    }

}

module.exports = MongoDBManager;