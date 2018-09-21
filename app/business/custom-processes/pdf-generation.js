const Mandate = require('../../../models').Mandate
const fetch = require('node-fetch')
const PostPdfBody = require('../../../views/custom-views/pdf-generation/pdf-post-body')

module.exports = {
  async generate(req, res, next) {
    let mandateId = req.params.id
    let mandate = await Mandate.findById(mandateId)
    let office = await mandate.getOffice()
    let negociator = await mandate.getNegociator()
    let property = await mandate.getProperty()
    let contactsList = await mandate.getContacts()
    let negociatorOffice = await mandate.getOffice()
    let contacts = {}

    contactsList.forEach(contact => {
      contacts[contact.status] = contact
    })

    let body = PostPdfBody.expose(
        mandate,
        office,
        negociator,
        property,
        contacts,
        negociatorOffice)

    let result = fetch('https://hzrma33tw1.execute-api.eu-west-1.amazonaws.com/v1/sales-mandate-pdf', {
      method: 'POST',
      hostname: [
        "hzrma33tw1",
        "execute-api",
        "eu-west-1",
        "amazonaws",
        "com"
      ],
      path: [
        "v1",
        "sales-mandate-pdf"
      ],
      body: JSON.stringify(body),
      headers: { "Cache-Control": "no-cache" }
    }).then(res => res.json())
    .then(json => res.send({ data: { attributes: { pdfUrl: json } } }))
  }
}
