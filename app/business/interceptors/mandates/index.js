const Mandate = require('../../../../models').Mandate

module.exports = {
  index(req, res) {
    let body = {}

    if (req.query && req.query.userId) { body.userUuid = req.query.userId }
    if (req.query && req.query.status) { body.status = req.query.status }
    return Mandate.findAll({
      where: body
    })
  }
}
