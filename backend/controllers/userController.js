const asyncHandler = require("express-async-handler");
const bycrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
// @register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // if user not type anyone of them
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("plz fill all field");
  }
  // if email already exist in the db
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("email already exist");
  }

  //hashed password
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(password, salt);

  // Create User
  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: createJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
// @login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bycrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: createJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});
// @me myself get JWT
const getMe = (req, res) => {
  res.json({ message: "User's detail" });
};

// JWT

// Generate JWT
const createJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SCRETE, {
    expiresIn: '30d',
  })
}

module.exports = { registerUser, loginUser, getMe };
