const models = require('../models');
const Promotion = models.Promotion;

module.exports = {
    index: function(req,res,next){
        Promotion.findAll({ 
            include : ['school', 'Technology'],
        })
        .then((promotions) => {res.json({ promotions });})
        .catch((error) => {res.status(500).json({ error });})
    },
    show: function(req,res,next){
        Promotion.findByPk(req.params.id, { 
            include : ['school', 'Technology'],
        })
        .then((promotions) => {res.json({ promotions });})
        .catch((error) => {res.status(500).json( error );})
    },
}