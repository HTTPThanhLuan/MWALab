const cart = require('../models/card');

exports.getCard=(req, res, next)=>{  
    
     
     if(!req.user.cart) req.user.cart = { products: [], totalPrice: 0 };
     res.render('cart.ejs',{name:'Thanh', cart:req.user.cart});
}

exports.orderView = (req, res, next)=>{   
    console.log("orderview", req.user);
    res.render('checkout.ejs',{name:'Thanh'});
}

exports.orderSave = (req, res, next)=>{      
 
   cart.orderSave(req.body,req.user).then(()=>{
       res.redirect('/');
   }).catch(err=>{
       console.log(err);
   })
}
  

exports.save = (req, res, next)=>{      
     console.log("userShopping",req.user);
    cart.save(req.body.id,req.user).then(()=>{
        res.redirect('/');
    }).catch(err=>{
        console.log(err);
    })
   

}

exports.remove=(req, res, next)=>{      
    console.log('remove');
    cart.remove(req.body.id, req.user);
    res.redirect('/card');

}