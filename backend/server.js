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

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN || "*",
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
});

// small rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200 // per IP
});

app.use(limiter);
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "*"
}));
app.use(express.json());

// attach io to app so routes can emit
app.set("io", io);

// routes
app.use("/comments", commentRoutes);

// socket events (optional)
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);
  socket.on("disconnect", () => console.log("Socket disconnected:", socket.id));
});

// DB connect + start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { })
  .then(() => {
    console.log("MongoDB connected");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
