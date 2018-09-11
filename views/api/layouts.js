const User = require('./user/user');
const Order = require('./order/order');
const Merchant = require('./merchant/merchant');
const Ico = require('./ico/ico');
const Price = require('./price/price');
const UserSession = require('./usersession/usersession');
const PaymentMethodHistory = require('./paymentmethodhistory/paymentmethodhistory');
const Payment = require('./payment/payment');
const Transaction = require('./transaction/transaction');
const Cryptocurrency = require('./cryptocurrency/cryptocurrency');
const Prospect = require('./prospect/prospect');

module.exports = {
  icos: Ico,
  merchants: Merchant,
  orders: Order,
  prices: Price,
  users: User,
  'user-sessions': UserSession,
  'payment-method-histories': PaymentMethodHistory,
  payments: Payment,
  transactions: Transaction,
  cryptocurrencies: Cryptocurrency,
  prospects: Prospect
};
