const productController = require('../controllers/products');
const router= require('express').Router();
const path = require('path');
const fs = require('fs');
router.get('/',productController.view);

router.post('/',productController.save); //new

router.get('/:id',productController.viewEdit); // render view for editing

router.post('/delete',productController.delete); // delete

router.post('/:id',productController.edit); //edit


router.get('/detail/:id',productController.detail); // detail


module.exports=router;