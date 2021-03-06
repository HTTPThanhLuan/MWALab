const userModel = require('../models/user');

exports.View = async function(req, res, next){
    res.render("SingUp.ejs",{name:"Thanh"});
},

exports.OrderHistory = async function(req, res, next){

      res.render("orderhistory.ejs",{name:"Thanh", orders: req.user.orders.sort((a,b)=>{return -1})});
},

exports.Save = (req, res, next)=>{
     
    let user = new userModel(req.body.email, req.body.password);
    try{
        user.save().then(()=>{
            res.redirect("/");    
        }); 
      
    } catch (err){ console.log(err) }
  
}