const express = require('express');
const router = express.Router();
const viewController = require('../controller/viewController');

router.get('/view/:id', viewController.getView);
module.exports = router;