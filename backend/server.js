const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const { protect } = require("./middleware/authMiddleware");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalsRoute"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`port listen at ${PORT}`);
});
