const JSONRelationsExposingService = require('../../exposing-services/json/relationships');

module.exports = {
  async expose(office) {
    return await ({
      data: {
        id: office.uuid,
        type: 'offices',
        attributes: {
          'wording': office.wording,
          'company-name': office.companyName,
          'office-name': office.officeName,
          'logo': office.logo,
          'address': office.address,
          'post-code': office.postCode,
          'city': office.city,
          'coutry': office.coutry,
          'contact-information': office.contactInformation,
          'legal-status': office.legalStatus,
          'siren': office.siren,
          'siret': office.siret,
          'rcs': office.rcs,
          'rcs-city': office.rcsCity,
          'social-capital': office.socialCapital,
          'intercommunity-tva': office.intercommunityTva,
          'head-office': office.headOffice,
          'head-office-address': office.headOfficeAddress,
          'naf-ape': office.nafApe,
          'professional-card': office.professionalCard,
          'place-of-issue': office.placeOfIssue,
          'transaction': office.transaction,
          'gestion': office.gestion,
          'activity': office.activity,
          'perceive-funds': office.perceiveFunds,
          'transaction-guarantees-amount': office.transactionGuaranteesAmount,
          'gestion-guarantees-amount': office.gestionGuaranteesAmount,
          'guarantee-fund': office.guaranteeFund,
          'created-at': office.createdAt,
          'updated-at': office.updatedAt
        },
        relationships: await JSONRelationsExposingService.relationships(office, ['user', 'offices', 'mandates', 'negociators', 'office'])
      }
    });
  }
};
