var express = require('express');
var router = express.Router();
var userController  = require('../controllers').user;
/* GET home page. */
router.get('/api/user', userController.list);
module.exports = router;
