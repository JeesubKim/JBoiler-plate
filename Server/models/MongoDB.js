const mongoose = require("mongoose");

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
        mongoose.connect('mongodb://localhost/mongodb_JBoiler_plate',{ useNewUrlParser: true,  useUnifiedTopology: true });
    }

}

module.exports = MongoDBManager;