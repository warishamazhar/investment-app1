require("dotenv").config();
const connectDB = require("./config/db");

const startApp = async () => {
  await connectDB();
  console.log("App running on macOS...");
};

startApp();



