// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  websiteName: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  paidAmount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
