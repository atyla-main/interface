const Role = require('../models').Role;

module.exports = {
  create(req, res) {
    const data = req.body.data;
    return Role
      .create({
        identifier: data.attributes.identifier,
        adminUserId: data.relationships['admin-user'].id,
      })
      .then(adminUser => res.status(201).send(adminUser))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Role
      .all()
      .then(Roles => res.status(200).send(Roles))
      .catch(error => {
        res.status(400).send(error)
      });
  },
};