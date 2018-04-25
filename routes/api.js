var express = require('express');
var router = express.Router();
const adminUsersController = require('../controllers').adminUsers;
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
router.get('/admin-users', adminUsersController.index);
router.get('/admin-users/:adminUserId', adminUsersController.show);
router.post('/admin-users', adminUsersController.create);
router.put('/admin-users/:adminUserId', adminUsersController.update);
router.delete('/admin-users/:adminUserId', adminUsersController.destroy);
router.get('/roles', rolesController.list);
router.post('/roles', rolesController.create);

module.exports = router;