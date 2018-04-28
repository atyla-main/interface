var express = require('express');
var router = express.Router();
const usersController = require('../controllers').users;
const rolesController = require('../controllers').roles;

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
router.get('/users', usersController.index);
router.get('/users/:userId', usersController.show);
router.post('/users', usersController.create);
router.put('/users/:userId', usersController.update);
router.delete('/users/:userId', usersController.destroy);
router.get('/roles', rolesController.list);
router.post('/roles', rolesController.create);
router.put('/roles/:roleId', rolesController.update)

module.exports = router;
