var express = require('express');
var router = express.Router();
const usersController = require('../controllers').users;
const newslettersController = require('../controllers').newsletters;
var bodyParser = require('body-parser');

/* GET home page. */

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/newsletters', newslettersController.create);

module.exports = router;
