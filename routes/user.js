const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/new', userController.createUser);
router.post('/login', userController.loginUser);

module.exports = router;
