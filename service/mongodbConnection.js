const mongoClient = require('mongodb').MongoClient;

let _db;

exports.getDB=()=>{
   if(_db) return _db;
 else {
     //create _db;
    //_db = createConnection();
    console.log("The mongodb connection is failure")
 }
}
 function createConnection(callback){
    mongoClient.connect("mongodb://localhost:27017",{useNewUrlParser:true, useUnifiedTopology: true })
    .then((client)=>{
      _db = client.db("onlineshoping");    
       callback();
    })
    .catch((err)=>{
        console.log(err);
    })
 }



exports.connectMongoDB = createConnection;