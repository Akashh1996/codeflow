const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  displayName: { type: String },
  gmail: { type: String },
  photo: { type: String },
  uid: { type: String },
});

module.exports = model('users', userSchema);
