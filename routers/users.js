
const router= require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.View);
router.get('/orderhistory', userController.OrderHistory);

router.post('/', userController.Save);
 
module.exports = router;