const asyncHandler = require("express-async-handler");
// @register User
const registerUser = (req, res) => {
  res.json({ message: "User Register successfully" });
};
// @login User
const loginUser = (req, res) => {
  res.json({ message: "User login successfully" });
};
// @me myself get JWT
const getMe = (req, res) => {
  res.json({ message: "User's detail" });
};
module.exports = { registerUser, loginUser, getMe };
