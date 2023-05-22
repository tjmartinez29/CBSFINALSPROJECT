const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.get('/', loginController.getLogin);
router.post('/login', loginController.postLogin);
module.exports = router;

