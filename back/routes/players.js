var express = require('express');
var router = express.Router();
const playerController = require('../controllers/playerController')
/* GET quizz listing. */
router.get('/', playerController.index);
router.get('/:id(\\d+)', playerController.show);

module.exports = router;