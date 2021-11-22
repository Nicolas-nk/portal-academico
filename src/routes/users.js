var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.readAll);

module.exports = router;
