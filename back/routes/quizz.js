var express = require('express');
var router = express.Router();
const quizzController = require('../controllers/quizzController')
/* GET quizz listing. */
router.get('/', quizzController.index);
router.get('/:id(\\d+)', quizzController.show);

module.exports = router;