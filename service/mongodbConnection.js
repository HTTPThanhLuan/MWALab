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
     const con = process.env.dbconnectionstringLocal || process.env.connectionstring;
    console.log(con);
    mongoClient.connect(con,{useNewUrlParser:true, useUnifiedTopology: true })
    .then((client)=>{
      _db = client.db("onlineshoping");    
       callback();
    })
    .catch((err)=>{
        console.log(err);
    })
 }



exports.connectMongoDB = createConnection;