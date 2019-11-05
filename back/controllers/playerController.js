const models = require('../models');
const Player = models.Player;

module.exports = {
    index: function(req,res,next){
        Player.findAll({ 
            include : ['school', 'Technology'],
        })
        .then((players) => {res.json({ players });})
        .catch((error) => {res.status(500).json({ error });})
    },
    show: function(req,res,next){
        Player.findByPk(req.params.id, { 
            include : ['promotion'],
        })
        .then((players) => {res.json({ players });})
        .catch((error) => {res.status(500).json( error );})
    },
}