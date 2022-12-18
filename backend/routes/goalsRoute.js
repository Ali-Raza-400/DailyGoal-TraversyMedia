const express = require("express");
const { getGoals, setGoals, updateGoals, deleteGoals } = require("../controllers/goalController");
const router = express.Router();

// router.get("/", getGoals);
// router.post("/", setGoals);
// router.put("/:id",updateGoals );
// router.delete("/:id", deleteGoals);
// @we can combine the same routes as below
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)
module.exports = router;
