import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// middleware
// always keep the cors above all the middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);


// simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// })

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
