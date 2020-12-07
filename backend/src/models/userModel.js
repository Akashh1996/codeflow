const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String },
  gmail: { type: String },
  photo: { type: String },
});

module.exports = model('users', userSchema);
