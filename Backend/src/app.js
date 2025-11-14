import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(cors({ origin: process.env.FRONTEND_URI, credentials: true }));

app.use("/api/v1/auth", authRoutes);

export default app;
