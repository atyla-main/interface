const AdminUser = require('../models').AdminUser;
const Role = require('../models').Role;

module.exports = {
  create(req, res) {
    const attributesibutes = req.body.data.attributes;
    return AdminUser
      .create({
        email: attributes.email,
        firstName: attributes.firstName,
        lastName: attributes.lastName,
      })
      .then(adminUser => res.status(201).send(adminUser))
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return AdminUser
      .findById(req.params.adminUserId)
      .then(AdminUser => {
        if (!AdminUser) {
          return res.status(400).send({
            message: 'AdminUser Not Found',
          })
        }

        return AdminUser
          .destroy()
          .then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return AdminUser
      .findAll({
        include: [{
          model: Role,
          as: 'roles',
        }]
      })
      .then(AdminUsers => res.status(200).send(AdminUsers))
      .catch(error => {
        res.status(400).send(error)
      });
  },
  show(req, res) {
    return AdminUser
      .findById(req.params.adminUserId, {
        include: [{
          model: Role,
          as: 'roles',
        }],
      })
      .then(AdminUser => {
        if (!AdminUser) {
          return res.status(400).send({
            message: 'AdminUser Not Found',
          });
        }
        return res.status(200).send(AdminUser);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    const attributesibutes = req.body.data.attributes;
    return AdminUser
      .findById(req.params.adminUserId, {
        include: [{
          model: Role,
          as: 'roles',
        }],
      })
      .then(AdminUser => {
        if (!AdminUser) {
          return res.status(400).send({
            message: 'AdminUser Not Found',
          });
        }
        return AdminUser
          .update(attributesibutes, { fields: Object.keys(attributesibutes) })
          .then(() => res.status(200).send(AdminUser))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};