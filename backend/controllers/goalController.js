const asyncHandler = require("express-async-handler");
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals😎" });
});
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("goal not found");
  }
  res.status(200).json({ message: "set goals😎" });
});
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goals😎 ${req.params.id}` });
});
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goals😎 ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
