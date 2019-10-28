var express = require('express');
var router = express.Router();
const promotionController = require('../controllers/promotionController')
/* GET quizz listing. */
router.get('/', promotionController.index);
router.get('/:id(\\d+)', promotionController.show);

module.exports = router;