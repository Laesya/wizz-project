var express = require('express');
var router = express.Router();
const questionController = require('../controllers/questionController')
/* GET questions listing. */
router.get('/', questionController.index);
router.get('/:id(\\d+)', questionController.show);

module.exports = router;