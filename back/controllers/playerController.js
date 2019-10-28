const models = require('../models');
const Player = models.Player;

module.exports = {
	index: (req, res) => {
		console.log('ENTER IN USER CONTROLLER', req);
		Player.scope('withoutPassword').findAll()
			.then((players) => res.json({ players }))
			.catch((err) => res.status(404).send(err));
	},

	show: (req, res) => {
		Player.scope('withoutPassword').findByPk(req.params.id)
			.then((player) => {
				player ? res.json({ player: player }) : res.status(404).json({ error: `Player with id ${req.params.id} can't be found.` })
			})
			.catch((error) => res.status(503).json({ error: 'Service unavailable' }));
	},

	create: (req, res) => {
		Player.scope('withoutPassword').create({
            name: req.body.name,
            firstname: req.body.firstname,
            email: req.body.email,
            password: req.body.password,
            points: req.body.points,
            isTeacher: req.body.isTeacher || false,
            isAdmin: req.body.isAdmin || false,
            promotionId: req.body.promotionId,			
		})
			.then((player) => res.status(201).json({ response: 'Player added to database.' }))
			.catch((error) => res.status(404).json({ error }));
	},

	update: (req, res) => {
		Player.scope('withoutPassword').findByPk(req.params.id)
			.then((player) => {
				player.update({
					name: req.body.name,
					firstname: req.body.firstname,
					email: req.body.email,
					password: req.body.password,
					points: req.body.points,
					isTeacher: req.body.isTeacher,
					isAdmin: req.body.isAdmin,
					promotionId: req.body.promotionId,
				})
					.then((player) => res.json({ player }))
					.catch((error) => res.json({ error }));
			})
			.catch((error) => { res.status(404).json({ error }); });
	},

	delete: (req, res) => {
		Player.scope('withoutPassword').findByPk(req.params.id)
			.then((player) => {
				player.destroy()
					.then((player) => { res.json({ response: `Player ${player.firstName} ${player.lastName} has been deleted.` }); })
					.catch((error) => res.status(403).json({ error, message: '403 Please contact Admin' }));
			})
			.catch((error) => res.status(404).json({ error: '404 User Not Found' }));
	},
};