const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// CORS setup
const corsOption = {
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"]
};
app.use(cors(corsOption));

// Connect MongoDB
mongoose.connect(process.env.MONGOOSE_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Routes
const todoRoutes = require("./routes/todo.routes");
app.use("/api/todo", todoRoutes);

const PORT = process.env.PORT_NO || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
