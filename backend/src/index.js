import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});