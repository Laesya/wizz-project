const models = require('../models');
const Question = models.Question;

module.exports = {
    index: function(req,res,next){
        Question.findAll({ 
            include : ['Technology'],
        })
        .then((questions) => {res.json({ questions });})
        .catch((error) => {res.status(500).json({ error });})
    },
    show: function(req,res,next){
        Question.findByPk(req.params.id, { include : ['Technology']})
        .then((questions) => {res.json({ questions });})
        .catch((error) => {res.status(500).json( error );})
    },
}