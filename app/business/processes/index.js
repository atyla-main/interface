const views = require('../../../views/api/index');
const Models = require('../../../models');
const pluralize = require('pluralize')
const _ = require('lodash');
const interceptors = require('../interceptors');

module.exports = {
  async index(req, res, next) {
    let objs

    if (interceptors[res.collection_name] && interceptors[res.collection_name]['index']) {
      objs =  await interceptors[res.collection_name]['index'](req, res)
    } else {
      objs = await res.model.all();
    }
    let payload = [];

    for (obj in objs) {
      let record = await views.expose(objs[obj], res.collection);
      payload.push(record.data);
    }

    res.send({ data: payload });
  }
};
