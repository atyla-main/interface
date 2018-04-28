const User = require('../models').User;
const Role = require('../models').Role;
const view = require('../views').users;

module.exports = {
  create(req, res) {
    const attributes = req.body.data.attributes;
    return User
      .create({
        email: attributes.email,
        firstName: attributes.firstName,
        lastName: attributes.lastName,
        password: attributes.password,
      })
      .then(user => res.status(201).send(
        view.payload(user)
      ))
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(User => {
        if (!User) {
          return res.status(400).send({
            message: 'User Not Found',
          })
        }

        return User
          .destroy()
          .then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return User
      .findAll({
        include: [{
          model: Role,
          as: 'roles',
        }]
      })
      .then(Users => res.status(200).send(
        view.index_payload(Users)
      ))
      .catch(error => {
        res.status(400).send(error)
      });
  },
  show(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Role,
          as: 'roles',
        }],
      })
      .then(User => {
        if (!User) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(
          view.payload(User)
        );
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    const attributes = req.body.data.attributes;
    return User
      .findById(req.params.userId, {
        include: [{
          model: Role,
          as: 'roles',
        }],
      })
      .then(User => {
        if (!User) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return User
          .update(attributes, { fields: Object.keys(attributes) })
          .then(() => res.status(200).send(
            view.payload(User)
          ))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
