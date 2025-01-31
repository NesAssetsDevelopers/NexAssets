const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const userController = require('../controllers/userController');

router.get('/properties', propertyController.getProperties);
router.post('/properties', propertyController.addProperty);
router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);

module.exports = router;
