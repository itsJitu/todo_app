const express = require("express");
const router = express.Router();
const { addTask, getTask, getAllTask, editTask, deleteTask } = require("../controllers/todo.controllers");

router.post("/add", addTask);       // add new task
router.get("/", getAllTask);        // get all tasks
router.get("/:id", getTask);        // get single task
router.put("/:id", editTask);       // update task
router.delete("/:id", deleteTask);  // delete task

module.exports = router;
