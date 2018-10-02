const Mandate = require('../../../models').Mandate
const Contact = require('../../../models').Contact
const Property = require('../../../models').Property
const fetch = require('node-fetch')
const PostPdfBody = require('../../../views/custom-views/pdf-generation/pdf-post-body')

module.exports = {
  async contract(req, res, next) {
    let mandates = await Mandate.findAll({ where: { status: req.query.status, userUuid: req.query.userId } })

    let list = []
    for (mandateIndex in mandates) {
      mandate = mandates[mandateIndex];
      let mandant = await Contact.findAll({ where: { mandateUuid: mandate.uuid } })
      let property = await Property.findById(mandate.propertyUuid);

      let currentMandant = mandant.find((mandant) => {
        if (mandant.firstName) { return mandant }
      })

      let data = { firstName: '', lastName: '' }
      if (currentMandant) {
        data.firstName = currentMandant.firstName;
        data.lastName = currentMandant.lastName;
      }

      list.push({
        createdAt: mandate.createdAt,
        property: property && property.address ? property.address : '',
        mandant: `${data.firstName} ${data.lastName}`,
        number: mandate.mandateNumber || ''
      })
    }


    res.send({ data: {
      attributes: {
          mandateList: list
        }
      }
    })
  }
}
