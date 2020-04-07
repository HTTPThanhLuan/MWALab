const mongodb = require('../service/mongodbConnection');
const ObjectId = require('mongodb').ObjectId;

module.exports = class Product{
    constructor(title, price, description, imageUrl ){
        this.title=title;
        this.price=price;
        this.description=description;
        this.imageUrl = imageUrl;
    }

    save(){      
       return mongodb.getDB().collection("products").insertOne(this);
    }

    static get(){
   
        return mongodb.getDB().collection("products").find().toArray();
     
    }

    static getById(id){
       return mongodb.getDB().collection("products").findOne({_id: new ObjectId(id)});
    }

    update(){
    
      return  mongodb.getDB().collection("products").updateOne({_id: new ObjectId(this._id)},{$set:{
            title:this.title,
            price:this.price,
            imageUrl:this.imageUrl,
            description:this.description
        }})

    } 
    static delete(id){
       
       return mongodb.getDB().collection("products").remove({_id: new ObjectId(id)});
    }
    
}
