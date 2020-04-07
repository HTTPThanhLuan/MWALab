const router= require('express').Router();
const path = require('path');
const fs = require('fs');
const cardController = require('../controllers/card');

router.get('/', cardController.getCard);
router.post('/', cardController.save);
router.post('/remove', cardController.remove);
router.get('/order', cardController.orderView);
router.post('/order', cardController.orderSave);
module.exports = router;