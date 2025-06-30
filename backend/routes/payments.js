const express = require('express');
const router = express.Router();
const Website = require('../models/Website');
const Payment = require('../models/Payment');  // Import Payment model

// POST - Insert payment details
router.post('/insert-payment', async (req, res) => {
  try {
    const { username, email, websiteName, websiteUrl, paidAmount } = req.body;

    const payment = new Payment({
      username,
      email,
      websiteName,
      websiteUrl,
      paidAmount,
      paymentDate: new Date(),
    });

    await payment.save();
    res.status(201).json({ msg: 'Payment details saved successfully', payment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// GET - Retrieve all payment records
router.get('/all-payments', async (req, res) => {
  try {
    const payments = await Payment.find().sort({ paymentDate: -1 }); // Sort by most recent payment date
    res.status(200).json({ payments }); // Respond with the payments
  } catch (err) {
    console.error("Error fetching payments:", err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
