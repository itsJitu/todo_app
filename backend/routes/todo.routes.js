const express = require("express");

const router = express.Router();

const {addTask, getTask, getAllTask} = require("../controllers/todo.controllers");

router.post("/add", addTask); // add a new Task
router.get("/:id", getTask); // get task by id 
router.get("/", getAllTask); // get all the task 

module.exports = router;