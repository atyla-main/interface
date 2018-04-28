const Role = require('../models').Role;
const view = require('../views').roles;

module.exports = {
  create(req, res) {
    const data = req.body.data;

    return Role
      .create({
        identifier: data.attributes.identifier,
        userId: data.relationships['user'].data.id,
      })
      .then(Role => res.status(201).send(
        view.payload(Role)
      ))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Role
      .all()
      .then(Roles => res.status(200).send(
        view.index_payload(Roles)
      ))
      .catch(error => {
        res.status(400).send(error)
      });
  },
  update(req, res) {
    const attributes = req.body.data.attributes;

    return Role
      .findById(req.params.roleId)
      .then(Role => {
        console.log("HERE");
        if (!Role) {
          return res.status(400).send({
            message: 'Role Not Found',
          });
        }
        return Role
          .update(attributes, { fields: Object.keys(attributes) })
          .then(Role => res.status(200).send(
            view.payload(Role)
          ))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
