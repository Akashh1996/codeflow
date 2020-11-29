const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const questionSchema = new Schema({
  question: { type: String },
});

module.exports = model('questions', questionSchema);
