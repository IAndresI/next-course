const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true, maxLength: 128, minLength: [3, "Minimum name length is 3 characters"]},
  avatar: String,
  email: {type: String, required: "Email is required!", lowercase: true, index: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
  userName: {type: String, required: true, minLength: [6, "Minimum userName length is 6 characters"]},
  password: {type: String, required: true, maxLength: [50, "Maximum password length is 50 characters"], minLength: [6, "Minimum name length is 6 characters"]},
  role: {type: String, enum: ['GUEST', 'ADMIN', 'INSTRUCTOR'], required: true, default: 'GUEST'},
  info: String,
  createdAt: {type: Date, default: Date.now}
})

userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
})

module.exports = mongoose.model('User', userSchema);