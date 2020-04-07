const product = require('../models/product');

exports.getProducts=(req, res, next)=>{      
     
    product.get().then(products=>{
        res.render('index.ejs',{name:'Thanh',products:products});
    }).catch((err)=>{console.log(err)})

 

}