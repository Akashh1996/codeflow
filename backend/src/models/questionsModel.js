const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const questionSchema = new Schema({
  questionTitle: { type: String, required: true },
  questionDescription: { type: String, required: true },
  code: { type: String, required: true },
  date: { type: Date, default: new Date() },
  owner: { type: Schema.Types.ObjectId, ref: 'users' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'answers' }],
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  tag: { type: String, required: true },

});

module.exports = model('questions', questionSchema);
