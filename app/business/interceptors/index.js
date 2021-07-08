const users = require('./users/create')
const contacts = require('./contacts/index')
const mandates = require('./mandates/index')

module.exports = {
  User: users,
  Contact: contacts,
  Mandate: mandates
}
