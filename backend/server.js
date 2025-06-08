import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./config/db.js";
import { ENV_VARS } from "./config/envVars.js";
const app = express();

app.use(express.json());

const PORT = ENV_VARS.PORT;

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log("app runs on Port 5000");
  connectDB();
});
