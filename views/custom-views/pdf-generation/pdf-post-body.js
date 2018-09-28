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
        'civility': 'Mme',
        'firstName': 'MARIE',
        'lastName': 'DURAND',
        'phone': '0111223344',
        'website': 'www.atyla.io',
        'streetName': '10 RUE CAMBON',
        'zipCode': '75001',
        'city': 'PARIS'
      }
    }

    if (contacts.notaire) {
      notary = {
        'civility': 'Maître',
        'firstName': 'PIERRE',
        'lastName': 'DUPONT'
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
                'partsFillingDate': '7'
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
              'penaltyClauseDuration': '12',
              'mandateAdvertisingDescription': mandate.mandateAdvertising
            },
            'office': {
              'companyName': 'AGENCE IMMOBILIERE',
              'logo': 'https://s3-eu-west-1.amazonaws.com/atyla/logo/logo.png',
              'legalStatus': 'SARL',
              'socialCapitalAmount': {
                'value': '10 000',
                'currency': 'euros'
              },
              'rcs': '815194210',
              'rcsCity': 'PARIS',
              'nafApe': '6831Z',
              'headOffice': {
                'isHeadOffice': 'false',
                'companyName': 'SOCIETE DE GESTION IMMOBILIERE',
                'streetName': '10 RUE CAMBON',
                'zipCode': '75001',
                'city': 'PARIS'
              },
              'professionalCardNumber': 'CPI75012016000004900',
              'professionalCardPlace': 'PARIS',
                'perceiveFunds': 'false',
                'guarenteeFund': 'GALIAN',
                'GuaranteeAmount': {
                'value': '120 000',
                'currency': 'euros'
              }
            },
            'negociator': {
              'civility': 'M.',
              'lastName': 'LAGENT',
              'firstName': 'JEAN',
              'isCommercialAgent' : 'true',
              'RSAC' : '118',
              'RSAC_place': 'PARIS',
              'office': {
                'companyName': 'SOCIETE DE GESTION IMMOBILIERE',
                'phone': '0123456789',
                'website': '',
                'email': 'jean@atyla.io',
                'streetName': '10 RUE CAMBON',
                'zipCode': '75001',
                'city': 'PARIS'
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
