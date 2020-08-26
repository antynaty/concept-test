const express = require('express');
const router = express.Router(); 

const planetController = require('../controllers/planetController');
 
router.post('/', planetController.postChar);

module.exports = router;