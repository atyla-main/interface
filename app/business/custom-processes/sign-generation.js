const Mandate = require('../../../models').Mandate
const fetch = require('node-fetch')
const PostPdfBody = require('../../../views/custom-views/pdf-generation/pdf-post-body')
const fs = require("fs")
const https = require("https")
const PostSignBody = require('../../../views/custom-views/pdf-generation/sign-post-body')


module.exports = {
  async sign(req, res, next) {
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

    let result = await fetch('https://hzrma33tw1.execute-api.eu-west-1.amazonaws.com/v1/sales-mandate-pdf', {
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


    https.get(result, function(response) {
         var chunks = [];
         response.on('data', function(chunk) {
             chunks.push(chunk);
         });

         response.on("end", async function() {
             var jsfile = new Buffer.concat(chunks).toString('base64');

             let signRes = await fetch('https://staging-api.yousign.com/files', {
               method: 'POST',
               body: JSON.stringify({
                 'name': `${mandate.uuid}.pdf`,
                 'content': jsfile
               }),
               headers: {
                 'Authorization': "Bearer 97f34fe7a93b44af90559ac2b431e871",
                 'Content-Type': "application/json",
                 'Cache-Control': "no-cache"
               }
             }).then(res => res.json())


             let bodySign = PostSignBody.expose(
               signRes.id,
               contacts.mandant
             )


             let procedure = await fetch('https://staging-api.yousign.com/procedures', {
               method: 'POST',
               headers: {
                 'Authorization': "Bearer 97f34fe7a93b44af90559ac2b431e871",
                 'Content-Type': "application/json",
                 'Cache-Control': "no-cache"
               },
               body: JSON.stringify(bodySign)
             }).then(res => res.json())
         });
     }).on("error", function(err) {
       res.status(500).send({ errors: err })
     });
    res.send({ message: 'ok' })
  }
}
