const express = require('express');
const router = express.Router(); 

const charController = require('../controllers/charController');
 
router.get('/all', charController.getCharAll);
router.get('/:idChar', charController.getChar);
router.post('/', charController.postChar);

module.exports = router;