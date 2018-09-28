const Mandate = require('../../../models').Mandate
const fetch = require('node-fetch')
const PostPdfBody = require('../../../views/custom-views/pdf-generation/pdf-post-body')

module.exports = {
  async contract(req, res, next) {
    let mandateId = req.params.id
    let mandate = await Mandate.findById(mandateId)
    let property = await mandate.getProperty()
    let contactsList = await mandate.getContacts({
      where: { status: 'mandant' }
    })

    let principalMandant = null
    if (contactsList.length > 0) {
      principalMandant = contactsList[0]
    }
    let address = null
    if (property && property.address && property.postCode && property.city) {
      address = `${property.address} ${property.postCode} ${property.city}`
    }

    res.send({ data: {
      attributes: {
        mandant: principalMandant ? `${principalMandant.firstName} ${principalMandant.lastName}` : null,
        property: address
      }
    } })
  }
}
