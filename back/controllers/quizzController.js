const models = require('../models');
const Quizz = models.Quizz;
const Op = models.Sequelize.Op;

module.exports = {
    index: function(req,res,next){
        Quizz.findAll()
        .then((quizzs) => {res.json({ quizzs });})
        .catch((error) => {res.status(500).json({ error });})
    },
    show: function(req,res,next){
        Quizz.findByPk(req.params.id)
        .then((quizz) => {res.json({ quizz });})
        .catch((error) => {res.status(500).json( error );})
    },
}