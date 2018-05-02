var express = require('express');
var router = express.Router();
const usersController = require('../controllers').users;
const rolesController = require('../controllers').roles;
const newslettersController = require('../controllers').newsletters;

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});
// define the home page route
router.get('/', function(req, res) {
	res.send('Welcome to the api');
});
// define the about route
router
	.get('/users', usersController.index)
	.get('/users/:userId', usersController.show)
	.post('/users', usersController.create)
	.put('/users/:userId', usersController.update)
	.delete('/users/:userId', usersController.destroy);
router
	.get('/roles', rolesController.index)
	.post('/roles', rolesController.create)
	.put('/roles/:roleId', rolesController.update);
router
	.get('/newsletters', newslettersController.index)
	.get('/newsletters/:newsletterId', newslettersController.show);
//	.post('/newsletters', newslettersController.create);
module.exports = router;
