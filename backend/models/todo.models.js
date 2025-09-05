const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  date: { type: String },
  time: { type: String },
  priority: { type: String },
  fulfillment: { type: String, default: "Pending" },
});

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
