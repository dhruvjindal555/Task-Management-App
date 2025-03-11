const {
  createTask,
  deleteTask,
  updateTask,
  getAllTasks
} =  require("../controller/taskController.js");
const express = require('express')


const router = express.Router();

router.post("/post",  createTask);
router.delete("/delete/:id",  deleteTask);
router.put("/update/:id",  updateTask);
router.get("/getAllTasks",  getAllTasks);

module.exports = router;
