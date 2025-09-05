const todoModel = require("../models/todo.models");

// Add a new task
const addTask = async (req, res) => {
  try {
    const { task, description, category, date, time, priority, fulfillment } = req.body;

    if (!task) {
      return res.status(400).json({ error: "Task is required" });
    }

    const newTask = new todoModel({ task, description, category, date, time, priority, fulfillment });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all tasks
const getAllTask = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a task by ID
const getTask = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit/Update a task
const editTask = async (req, res) => {
  try {
    const updated = await todoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const deleted = await todoModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addTask, getAllTask, getTask, editTask, deleteTask };
