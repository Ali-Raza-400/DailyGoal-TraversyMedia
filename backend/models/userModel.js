const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "plz enter some text"],
  },
  email: {
    type: String,
    required: [true, "plz enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "plz enter password"],
  },
},{timeStamps:true});
module.exports = mongoose.model("User", userSchema);
