import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Middleware to handle CORS and JSON parsing
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

// Middleware to handle JSON parsing and URL-encoded data
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true, limit: "200kb" }));

// Middleware to serve static files
app.use(express.static("public"));

// Middleware to parse cookies
app.use(cookieParser());


// routes import
import userRouter from  './routes/user.routes.js'





// routes declaretion (e.g url/api/v1/users/register) 
// register route comes from userRouter all there more route like login, etc
app.use('/api/v1/users', userRouter)







app.get("/", (req, res) => {
  res.send("Hey coders! Welcome to the backend of Chaicode.");
});

export { app }; // same export app
