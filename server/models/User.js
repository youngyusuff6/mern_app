const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Custom password complexity validation
        // Minimum length, mixed case, letters, numbers
        const hasMinLength = value.length >= 8;
        const hasMixedCase = /[a-z]/.test(value) && /[A-Z]/.test(value);
        const hasLetters = /[a-zA-Z]/.test(value);
        const hasNumbers = /\d/.test(value);

        return hasMinLength && hasMixedCase && hasLetters && hasNumbers;
      },
      message: props => `${props.value} is not a valid password! Minimum length: 8, mixed case, letters, numbers.`,
    },
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
