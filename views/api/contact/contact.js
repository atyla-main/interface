const JSONRelationsExposingService = require('../../exposing-services/json/relationships');

module.exports = {
  async expose(contact) {
    return await ({
      data: {
        id: contact.uuid,
        type: 'contacts',
        attributes: {
          'wording': contact.wording,
          'address': contact.address,
          'post-code': contact.postCode,
          'city': contact.city,
          'country': contact.country,
          'phone': contact.phone,
          'fax': contact.fax,
          'email': contact.email,
          'status': contact.status,
          'civility': contact.civility,
          'last-name': contact.lastName,
          'first-name': contact.firstName,
          'other-first-name': contact.otherFirstName,
          'conjugal-status': contact.conjugalStatus,
          'marital-state': contact.maritalState,
          'birth-name': contact.birthName,
          'partner': contact.partner,
          'wedding-pacs-date': contact.weddingPacsDate,
          'wedding-pacs-place': contact.weddingPacsPlace,
          'birth-date': contact.birthDate,
          'birth-place': contact.birthPlace,
          'nationality': contact.nationality,
          'job': contact.job,
          'notes': contact.notes,
          'company-name': contact.companyName,
          'office-name': contact.officeName,
          'legal-status': contact.legalStatus,
          'other-status': contact.otherStatus,
          'siren': contact.siren,
          'siret': contact.siret,
          'rcs': contact.rcs,
          'rcs-city': contact.rcsCity,
          'rm': contact.rm,
          'code-naf-ape': contact.codeNafApe,
          'website': contact.website,
          'created-at': contact.createdAt,
          'updated-at': contact.updatedAt
        },
        relationships: await JSONRelationsExposingService.relationships(contact, ['user', 'mandate'])
      }
    });
  }
};
