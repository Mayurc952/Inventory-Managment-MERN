const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
});

const supplier = new mongoose.model('supplier',supplierSchema)

module.exports = supplier;