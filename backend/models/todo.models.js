const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    priority: { type: String, required: true },
    fulfillment: { type: String, required: true },
});

const todoModel = mongoose.model("todo", todoSchema);
module.exports = todoModel;
