const express = require('express');
const router = express.Router();
const Website = require('../models/Website');
const Payment = require('../models/Payment'); // Import the Payment model

// POST - Add new website info
router.post('/add-website', async (req, res) => {
  try {
    const website = new Website(req.body);
    await website.save();
    res.status(201).json({ msg: 'Website added successfully', website });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// GET - Get all websites
router.get('/all', async (req, res) => {
  try {
    const websites = await Website.find().sort({ createdAt: -1 });
    res.json(websites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// GET all websites
router.get('/get-all', async (req, res) => {
  try {
    const websites = await Website.find();
    res.status(200).json({ websites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// ✅ SEARCH - must be before :id
router.get('/search', async (req, res) => {
  try {
    const name = req.query.name || "";
    const websites = await Website.find({
      name: { $regex: name, $options: 'i' },
    });
    res.json({ websites });
  } catch (err) {
    console.error("Search API error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// GET - Filter websites by category
router.get('/filter/category', async (req, res) => {
  try {
    const category = req.query.category || "";
    const websites = await Website.find({
      category: { $regex: category, $options: 'i' },
    });
    res.status(200).json({ websites });
  } catch (err) {
    console.error("Filter by category error:", err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// ✅ Get a single website by ID
router.get('/:id', async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (!website) {
      return res.status(404).json({ msg: 'Website not found' });
    }
    res.json(website);
  } catch (err) {
    console.error("Get by ID error:", err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT - Update website by ID
router.put('/edit/:id', async (req, res) => {
  try {
    const updatedWebsite = await Website.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedWebsite) {
      return res.status(404).json({ msg: 'Website not found' });
    }

    res.json({ msg: 'Website updated', website: updatedWebsite });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// DELETE - Delete website by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const deleted = await Website.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ msg: 'Website not found' });
    }

    res.json({ msg: 'Website deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
