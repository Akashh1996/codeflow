const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const questionSchema = new Schema({
  questionTitle: { type: String },
  questionDescription: { type: String },
  date: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: 'user' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'answers' }],
  likes: { type: Number },
  dislikes: { type: Number },
  tag: { type: String },
});

module.exports = model('questions', questionSchema);
