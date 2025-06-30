const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  turnAroundTime: { type: String },
  category: { type: String },
  traffic: { type: Number },
  dr: { type: Number },
  price: { type: Number },
  DoFollowLinks: { type: Number },
  da: { type: Number },
  language: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Website', WebsiteSchema);
