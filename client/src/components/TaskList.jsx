import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";
import { getAllTasks } from "../utils/api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getAllTasks();
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">📝 Task Manager</h1>
      <Link to="/task/new" className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300">
        ➕
      </Link>
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-300">No tasks found. Click + to add one!</p>
        ) : (
          tasks.map((task) => <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />)
        )}
      </div>
    </div>
  );
};

export default TaskList;
