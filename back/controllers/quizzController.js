const models = require('../models');
const Quizz = models.Quizz;

module.exports = {
    index: function(req,res,next){
        Quizz.findAll({ 
            include : ['Technology'],
        })
        .then((quizzs) => {res.json({ quizzs });})
        .catch((error) => {res.status(500).json({ error });})
    },
    show: function(req,res,next){
        Quizz.findByPk(req.params.id, { 
            include : ['Technology'],
        })
        .then((quizz) => {res.json({ quizz });})
        .catch((error) => {res.status(500).json( error );})
    },
}