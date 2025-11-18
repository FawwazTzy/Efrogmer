// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import http from "http";
import { Server as SocketIO } from "socket.io";
import commentRoutes from "./routes/comment.js";
import rateLimit from "express-rate-limit";

dotenv.config();

// ===== Allowed origins =====
const allowedOrigins = [
  "http://localhost:5173",
  "https://testingfrog.netlify.app"
];

const app = express();
const server = http.createServer(app);

const io = new SocketIO(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true
  }
});

// ===== Rate limiter (API safety) =====
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200
});

// ===== Middleware =====
app.use(limiter);
app.use(helmet());
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

// Attach io so routes can emit events
app.set("io", io);

// ===== Routes =====
app.use("/comments", commentRoutes);

// ===== Socket Events =====
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

// ===== Database & Server Start =====
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("MongoDB connected");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
