import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./Routes/routes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/users", router);
// Connect to DB
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));