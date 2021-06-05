const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
  picture: {
    type: Object,
  },
  role: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

exports.User = User;
