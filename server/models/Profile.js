const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: { type: String, required: true },
  goals: { type: String, required: true },
});

module.exports = mongoose.model('Profile', ProfileSchema);