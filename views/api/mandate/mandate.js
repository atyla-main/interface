const JSONRelationsExposingService = require('../../exposing-services/json/relationships');

module.exports = {
  async expose(mandate) {
    return await ({
      data: {
        id: mandate.uuid,
        type: 'mandates',
        attributes: {
          'wording': mandate.wording,
          'internal-reference': mandate.internalReference,
          'negociator-on-contract': mandate.negociatorOnContract,
          'mandate-number': mandate.mandateNumber,
          'signature-date': mandate.signatureDate,
          'sale-amount': mandate.saleAmount,
          'remuneration-type': mandate.remunerationType,
          'percentage':	mandate.percentage,
          'lump-sum': mandate.lumpSum,
          'in-charge-of-remuneration': mandate.inChargeOfRemuneration,
          'escrow-account': mandate.escrowAccount,
          'delegation-of-power': mandate.delegationOfPower,
          'mandate-advertising': mandate.mandateAdvertising,
          'penalty-clause-duration': mandate.penaltyClauseDuration,
          'special-clause': mandate.specialClause,
          'documents-required': mandate.documentsRequired,
          'documents-required-person': mandate.documentsRequiredPerson,
          'partsFiling-deadline': mandate.partsFilingDeadline,
          'mandate-reference': mandate.mandateReference,
          'created-at': mandate.createdAt,
          'updated-at': mandate.updatedAt
        },
        relationships: await JSONRelationsExposingService.relationships(mandate, ['user', 'office', 'contacts', 'negociator', 'property'])
      }
    });
  }
};
