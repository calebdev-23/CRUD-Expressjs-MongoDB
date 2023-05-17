const express = require("express")
const {createTask, getTasks, getTask, deleteTask, updateTask}  = require("../controllers/taskController");
const router = express.Router()

// create task
router.post("/api/tasks", createTask)
//Get/Read all task
router.get("/api/tasks", getTasks)
//Get/Read single  task
router.get("/api/tasks/:id", getTask)
router.delete("/api/tasks/:id", deleteTask)
router.put("/api/tasks/:id", updateTask)

module.exports = router