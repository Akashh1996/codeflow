/*
user: { type: Schema.Types.ObjectId, ref: 'users' },
    answer: { type: String },
    date: { type: String },
    likes: { type: Number },
    dislikes: { type: Number },

*/

const { Schema, model } = require('mongoose');

const answerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  answer: { type: String },
  date: { type: String },
  likes: { type: Number },
  dislikes: { type: Number },

});
module.exports = model('answers', answerSchema);
