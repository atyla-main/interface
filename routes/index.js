var express = require('express');
var router = express.Router();
const newslettersController = require('../controllers').newsletters;
const ProcessCreate = require('../app/business/processes/create');
const CollectionsValidation = require('../app/middleware/collections-validation');

var bodyParser = require('body-parser');

/* GET home page. */

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/newsletters', CollectionsValidation.validate, ProcessCreate.create);

module.exports = router;
