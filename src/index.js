import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({ quiet: true });



connectDB();