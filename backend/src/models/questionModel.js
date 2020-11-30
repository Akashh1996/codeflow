const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const questionSchema = new Schema({
  questionTitile: { type: String },
  questionDescription: { type: String },
  date: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  answers: [{
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    answer: { type: String },
    date: { type: String },
    likes: { type: Number },
    dislikes: { type: Number },

  }],
  likes: { type: Number },
  dislikes: { type: Number },

});

module.exports = model('questions', questionSchema);
