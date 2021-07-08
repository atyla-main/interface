const Contact = require('../../../../models').Contact

module.exports = {
  index(req, res) {
    let body = {}

    if (req.query && req.query.userId) { body.userUuid = req.query.userId }
    if (req.query && req.query.status) { body.status = req.query.status }
    if (req.query && req.query.mandateId) { body.mandateUuid = req.query.mandateId }
    return Contact.findAll({
      where: body
    })
  }
}
