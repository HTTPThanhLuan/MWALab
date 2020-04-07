var card = null;
const product = require('./product');
const userModel = require('./user');

class Card {

   static async save(idProduct, user) {
      var cart = user.cart;
      if (!cart) cart = { products: [], totalPrice: 0 };


      let prods = cart.products.filter(t => t._id == idProduct);

      let pro = await product.getById(idProduct);
      if (!pro) throw new Error(`We can't find the product by Id = {idProduct}`)

      if (prods.length == 0) // add new
      {
         pro.quantity = 1;
         cart.products.push(pro);
         cart.totalPrice += parseInt(pro.price);
      }
      else // 
      {
         prods[0].quantity += 1;
         cart.totalPrice += parseInt(prods[0].price);
      }

      let userTem = new userModel(user.email, user.password, user._id);
      userTem.cart = cart;
      userTem.orders = user.orders;
      console.log("uerTem", userTem);
      return userTem.update();
   }

   static orderSave(body,user) {
      //1. add more property to user that is orders.
     console.log('user',user);
      if (!user.orders) user.orders = [];

      let item = user.cart;
      item.address = body.address;
      item.phone = body.phone;
      item.date = new Date();
      user.orders.push(item);

      //2. set null value to user.cart
      user.cart = null;

      console.log("temp",user);
      let userTem = new userModel(user.email, user.password, user._id);
      userTem.cart = null;
      userTem.orders = user.orders;
  
      return userTem.update();
   }

   static get(id) {
      userModel.findById(id).then(user => {
         if (user.cart)
            return user.cart;
         else
            return { products: [], totalPrice: 0 };
      }).catch((err) => {
         console.log(err);
      }) 


   }
   static remove(id, user) {
      console.log("remove",user);
      const index = user.cart.products.findIndex(t => t._id == id);
      const p = user.cart.products[index];
      if (index >= 0) {
         user.cart.products.splice(index, 1);
         user.cart.totalPrice = parseInt(user.cart.totalPrice) - (parseInt(p.price) * parseInt(p.quantity))
     
     
         let userTem = new userModel(user.email, user.password, user._id);
         userTem.cart = user.cart;
         userTem.orders = user.orders;
     
         return userTem.update();
      }
   }

}

module.exports = Card;