const express = require('express');
const bodyParser = require('body-parser');
const productRouters = require('./routers/product');
const cardRouters = require('./routers/card');
const usersRouters = require('./routers/users');
const homepageRouters = require('./routers/homepage');
const path = require('path');
const mongodbConnect = require('./service/mongodbConnection');
const userModel = require('./models/user');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));
//Provide static content
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) =>{
    userModel.findById('5e8a4b05e37a3d28b83a4cbc').then((user)=>{
        req.user= user;
        next();
    }).catch(err=> console.log(err))
})

//Include Routers
app.use('/card',cardRouters);
app.use('/admin',productRouters);
app.use('/users',usersRouters);
app.use('/', homepageRouters);

mongodbConnect.connectMongoDB(startServer);

function startServer(){
    app.listen(app.get('port'), function(){
        console.log('This server is listening on 3000 port....');
    })
}



//handle page not found;
app.use((req,res,next)=>{
    res.status(400).send("Page Not Found");
})

//handle error;

//app.use((err,req,res,next)=>{
  //  res.status(500).send("Server ERROR");
//})