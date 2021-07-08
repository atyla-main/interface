const JSONRelationsExposingService = require('../../exposing-services/json/relationships');

module.exports = {
  async expose(setting) {
    return await ({
      data: {
        id: setting.uuid,
        type: 'properties',
        attributes: {
          'logo-place': setting.logoPlace,
          'subtitle-color-background': setting.subtitleColorBackground,
          'subtitle-color-text': setting.subtitleColorText,
          'text-color': setting.textColor,
          'default-pay-type': setting.defaultPayType,
          'remuneration-amount': setting.remunerationAmount,
          'default-percentage': setting.defaultPercentage,
          'in-charge-of-remuneration': setting.inChargeOfRemuneration,
          'default-escrow-account': setting.defaultEscrowAccount,
          'default-delegation': setting.defaultDelegation,
          'default-penalty-clause-duration': setting.defaultPenaltyClauseDuration,
          'default-special-clause': setting.defaultSpecialClause,
          'created-at': setting.createdAt,
          'updated-at': setting.updatedAt
        },
        relationships: await JSONRelationsExposingService.relationships(setting, ['user', 'office', 'contact', 'negociator'])
      }
    });
  }
};
