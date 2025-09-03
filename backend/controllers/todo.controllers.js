const todoModel = require("../models/todo.models");

// Add a new task
const addTask = async (req, res) => {
    try {
        const { task, description, category, date, time, priority, fulfillment } = req.body;
        // Basic validation
        if (!task || !description || !category || !date || !time || !priority || !fulfillment) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newTask = new todoModel({
            task,
            description,
            category,
            date,
            time,
            priority,
            fulfillment
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all task 
const getAllTask = async (req, res) => {
    try {
        const todo = await todoModel.find();
        res.status(200).json(todo);
    } catch (err) {
        res.status(500). json({ error: err.message });
    }
};

// Get a task by Id
const getTask = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {addTask, getAllTask, getTask};