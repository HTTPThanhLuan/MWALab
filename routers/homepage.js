const router= require('express').Router();
const path = require('path');
const fs = require('fs');
const homepageController = require('../controllers/homepage');

router.get('/', homepageController.getProducts);


module.exports=router;