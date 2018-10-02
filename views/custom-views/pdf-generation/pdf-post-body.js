module.exports = {
  expose(mandate, office, negociator, property, contacts, negociatorOffice) {
    let principals = []
    let mediator = {}
    let notary = {}
    let propertyValue = {}
    let documentsRequired = {}

    if (contacts.mandant) {
      principals.push({
        'civility': contacts.mandant.civility || '',
        'firstName': contacts.mandant.firstName || '',
        'otherFirstName': ', first Name',
        'LastName': contacts.mandant.lastName || '',
        'streetName': contacts.mandant.address || '',
        'zipCode': contacts.mandant.postCode || '',
        'city': contacts.mandant.city || ''
      })
    }

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


    notary = {
      'civility': 'Maître',
      'firstName': 'PIERRE',
      'lastName': 'DUPONT'
    }

    if (mandate.documentsRequired) {
      documentsRequired = {
        'surfaceCarrez': mandate.documentsRequired.surfaceCarrez || false,
        'dossierTechnique': mandate.documentsRequired.dossierTechnique || false,
        'carnetEntretien': mandate.documentsRequired.carnetEntretien || false,
        'organisationImmeuble':mandate.documentsRequired.organisationImmeuble || false,
        'person': mandate.documentsRequiredPerson || '',
        'partsFillingDate': '7'
      }
    }

    if (property) {
      propertyValue = {
        'propertyNature': property.propertyNature || '',
        'co-ownership': property.coOwnership || '',
        'description': property.description || '',
        'streetName': property.address || '',
        'zipCode': property.postCode || '',
        'city': property.city || '',
        'rentalState': property.rentalState || ''
      }
    }

    return ({
            'mandate': {
              'id': mandate.uuid || '',
              'mandateNumber': mandate.mandateNumber || '',
              'reference': mandate.mandateReference || '',
              'documentsRequired': documentsRequired || '',
              'delegationOfPower': {
                'proposer': mandate.delegationOfPower.proposer || '',
                'visiter': mandate.delegationOfPower.visiter || '',
                'publicite': mandate.delegationOfPower.publicite || '',
                'total': mandate.delegationOfPower.totale || ''
              },
              'saleAmount': {
                'value': mandate.saleAmount.amount || '',
                'currency': mandate.saleAmount.currency || '',
                'value_text': mandate.saleAmount.valueText || ''
              },
              'escrowAccount': mandate.escrowAccount || '',
              'remunerationType': mandate.remunerationType || '',
              'percentage': mandate.percentage || '',
              'lumpSum': {
                'value': mandate.lumpSum.amount || '',
                'currency': mandate.lumpSum.currency || '',
                'value_text': mandate.lumpSum.valueText || ''
              },
              'inChargeOfRemuneration': mandate.inChargeOfRemuneration || '',
              'penaltyClauseDuration': '12',
              'mandateAdvertisingDescription': mandate.mandateAdvertising || ''
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
            'property': propertyValue,
            'principal': principals,
            'notary': notary,
            'mediator': mediator
      })
  }
}
