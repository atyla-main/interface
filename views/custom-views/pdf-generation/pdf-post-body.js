module.exports = {
  expose(mandate, office, negociator, property, contacts, negociatorOffice) {
    let principals = []
    let mediator = {}
    let notary = {}

    if (contacts.mandant) {
      principals.push({
        'civility': contacts.mandant.civility,
        'firstName': contacts.mandant.firstName,
        'otherFirstName': ', first Name',
        'LastName': contacts.mandant.lastName,
        'streetName': contacts.mandant.address,
        'zipCode': contacts.mandant.postCode,
        'city': contacts.mandant.city
      })
    }

    if (contacts.mediateur) {
      mediator = {
        'civility': contacts.mediateur.civility,
        'firstName': contacts.mediateur.firstName,
        'lastName': contacts.mediateur.lastName,
        'phone': contacts.mediateur.phone,
        'website': 'www.atyla.io',
        'streetName': contacts.mediateur.address,
        'zipCode': contacts.mediateur.postCode,
        'city': contacts.mediateur.city
      }
    }

    if (contacts.notaire) {
      notary = {
        'civility': contacts.notaire.civility,
        'firstName': contacts.notaire.firstName,
        'lastName': contacts.notaire.lastName
      }
    }

    return ({
            'mandate': {
              'id': mandate.uuid,
              'mandateNumber': mandate.mandateNumber,
              'reference': mandate.mandateReference,
              'documentsRequired': {
                'surfaceCarrez': mandate.documentsRequired.surfaceCarrez,
                'dossierTechnique': mandate.documentsRequired.dossierTechnique,
                'carnetEntretien': mandate.documentsRequired.carnetEntretien,
                'organisationImmeuble':mandate.documentsRequired.organisationImmeuble,
                'person': mandate.documentsRequiredPerson,
                'partsFillingDate': mandate.partsFilingDeadline
              },
              'delegationOfPower': {
                'proposer': mandate.delegationOfPower.proposer,
                'visiter': mandate.delegationOfPower.visiter,
                'publicite': mandate.delegationOfPower.publicite,
                'total': mandate.delegationOfPower.totale
              },
              'saleAmount': {
                'value': mandate.saleAmount.amount,
                'currency': mandate.saleAmount.currency
              },
              'escrowAccount': mandate.escrowAccount,
              'remunerationType': mandate.remunerationType,
              'percentage': mandate.percentage,
              'lumpSum': {
                'value': mandate.lumpSum.amount,
                'currency': mandate.lumpSum.currency
              },
              'inChargeOfRemuneration': mandate.inChargeOfRemuneration,
              'penaltyClauseDuration': mandate.penaltyClauseDuration,
              'mandateAdvertisingDescription': mandate.mandateAdvertising
            },
            'office': {
              'companyName': office.companyName,
              'logo': office.logo,
              'legalStatus': office.legalStatus,
              'socialCapitalAmount': {
                'value': office.socialCapital.amount,
                'currency': office.socialCapital.currency
              },
              'rcs': office.rcs,
              'rcsCity': office.rcsCity,
              'nafApe': office.nafApe,
              'headOffice': {
                'isHeadOffice': 'false',
                'companyName': 'AGENCE IMMOBILIERE',
                'streetName': '7 HAMEAU DE BOULAINVILLIERS',
                'zipCode': '75016',
                'city': 'Paris'
              },
              'professionalCardNumber': office.professionalCard,
              'professionalCardPlace': office.placeOfIssue,
              'perceiveFunds': office.perceiveFunds,
              'guarenteeFund': office.guaranteeFund,
              'GuaranteeAmount': {
                'value': office.gestionGuaranteesAmount.amount,
                'currency': office.gestionGuaranteesAmount.currency
              }
            },
            'negociator': {
              'civility': negociator.civility,
              'lastName': negociator.lastName,
              'firstName': negociator.firstName,
              'isCommercialAgent' : negociator.commercialAgent,
              'RSAC' : negociator.rsac,
              'RSAC_place': negociator.rsacPlace,
              'office': {
                'companyName': negociatorOffice.companyName,
                'phone': '0123456789',
                'website': '',
                'email': 'jeremy@atyla.io',
                'streetName': negociatorOffice.address,
                'zipCode': negociatorOffice.postCode,
                'city': negociatorOffice.city
              }
            },
            'property': {
              'propertyNature': property.propertyNature,
              'co-ownership': property.coOwnership,
              'description': property.description,
              'streetName': property.address,
              'zipCode': property.postCode,
              'city': property.city,
              'rentalState': property.rentalState
            },
            'principal': principals,
            'notary': notary,
            'mediator': mediator
      })
  }
}
