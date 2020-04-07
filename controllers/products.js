const product = require('../models/product');



exports.view= (req, res, next)=>{
    
    res.render('product.ejs',{name:'Thanh', pro : new product()});

}; 

exports.viewEdit= (req, res, next)=>{

    product.getById(req.params.id).then((product)=>{
        console.log('test',product);
        res.render('product.ejs',{name:'Thanh',pro: product});
    }).catch((err)=>console.log(err));
   
};

exports.detail= (req, res, next)=>{

    product.getById(req.params.id).then((product)=>{
        res.render('productdetail.ejs',{name:'Thanh',pro: product});
    }).catch((err)=>console.log(err));
   
};
 
 

exports.save = (req, res, next)=>{
    console.log(req.body);
    let pro = new product(
        req.body.title,
        req.body.price,
        req.body.description,
        req.body.imageUrl
    );
   
    pro.save().then((result)=>{
        console.log(result);
        res.redirect('/');
     })
     .catch((err)=>{
         console.log(err);
     })
    
};


exports.edit=(req, res, next) =>{
   
   let pro = new product(req.body.title,req.body.price,req.body.description,
    req.body.imageUrl);
    pro._id=req.params.id;
    pro.update().then(result=>{
        res.redirect('/');
    }).catch((err)=>{
        console.log(err);
    }); 
   
};

exports.delete = (req, res, next) => {
  
   product.delete(req.body.id).then(()=>{
       res.redirect("/");
   }).catch((err)=>console.log(err))
};
