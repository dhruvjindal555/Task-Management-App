const  Task  = require("../models/taskSchema.js");

const createTask = (async (req, res, next) => {
  const { title, description } = req.body;
  const task = await Task.create({
    title,
    description
  });
  res.status(200).json({
    success: true,
    task,
    message: "Task Created",
  });
});



const deleteTask = (async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return res.status(400).json({
      success: false,
      message: "Task not found!",
    });
  }
  await task.deleteOne();
  res.status(200).json({
    success: true,
    message: "Task Deleted!",
  });
});




const updateTask = (async (req, res, next) => {
  const { id } = req.params;
  let task = await Task.findById(id);
  if (!task) {
    return res.status(400).json({
      success: false,
      message: "Task not found!",
    });
  }
  task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Task Updated!",
    task,
  });
});




const getAllTasks = (async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({
    success: true,
    tasks,
  });
});


module.exports = {
  createTask,
  deleteTask,
  updateTask,
  getAllTasks
}


