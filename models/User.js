// import Schema, model functions
const { Schema, model } = require("mongoose");

// create schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: function (value) {
      return validator.isEmail(value);
    },
    message: "Invalid Email Address",
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

// use the model
const User = model("user", userSchema);

// export the model
module.exports = User;
