const mongodbconnection = require("../service/mongodbConnection");
const objectId = require("mongodb").ObjectID;

module.exports = class User{
    constructor(email, pass, id){
        this.email = email,
        this.password = pass
        this._id = id;
    }

    save(){
       return mongodbconnection.getDB().collection("users").insertOne(this);
    }

    static findById(id){
        return mongodbconnection.getDB().collection("users").findOne({_id: new objectId(id)});
    }

    update(){
        console.log("replace", this);
        return mongodbconnection.getDB().collection("users").updateOne({_id:new objectId(this._id)},{$set:{
            email:this.email,
            password:this.password,
            cart:this.cart,
            orders:this.orders
        }});
    }
}
