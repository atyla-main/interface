const Contact = require('../../../../models').Contact

module.exports = {
  index(req, res) {
    if (req.query && req.query.userId) {
      return Contact.findAll({
        where: {
          userUuid: req.query.userId,
          status: req.query.status
        }
      })
    }
    return Contact.all()
  }
}
