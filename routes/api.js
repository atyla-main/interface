var express = require('express');
var router = express.Router();

const ProcessCreate = require('../app/business/processes/create');
const ProcessShow = require('../app/business/processes/show');
const ProcessIndex = require('../app/business/processes/index');
const ProcessUpdate = require('../app/business/processes/update');
const ProcessDestroy = require('../app/business/processes/destroy');
const CollectionsValidation = require('../app/middleware/collections-validation');
const IdValidation = require('../app/middleware/id-validation');
const ProcessPdf = require('../app/business/custom-processes/pdf-generation');
const ProcessList = require('../app/business/custom-processes/contract-list');

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

router.get('/', function(req, res) {
	res.send('Welcome to the api');
});

router.get('/contract-list/:id', ProcessList.contract)
      .get('/pdf-generations/:id', ProcessPdf.generate)
      .post('/:collection', CollectionsValidation.validate, ProcessCreate.create)
      .get('/:collection/:id', CollectionsValidation.validate, IdValidation.validate,  ProcessShow.show)
      .get('/:collection', CollectionsValidation.validate, ProcessIndex.index)
      .put('/:collection/:id', CollectionsValidation.validate, IdValidation.validate, ProcessUpdate.update)
      .delete('/:collection/:id', CollectionsValidation.validate, IdValidation.validate, ProcessDestroy.destroy);

module.exports = router;
