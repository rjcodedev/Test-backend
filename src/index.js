import dotenv from "dotenv";
dotenv.config({ quiet: true });
import connectDB from "./db/index.js";
import { app } from "./app.js";
const SERVER_PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server is running on port ${SERVER_PORT}`);
    });
    console.log("MongoDB connection established successfully.");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  });
