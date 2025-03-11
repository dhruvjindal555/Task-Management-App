import React from "react";
import { Link } from "react-router-dom";
import { deleteTask } from "../utils/api";

const TaskItem = ({ task, fetchTasks }) => {
  const handleDelete = async () => {
    await deleteTask(task._id);
    fetchTasks();
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
      <h2 className="text-lg font-bold text-white">{task.title}</h2>
      <p className="text-gray-300">{task.description}</p>
      <div className="mt-3 flex justify-end space-x-2">
        <Link
          to={`/task/edit/${task._id}`}
          className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
        >
          ✏️ Edit
        </Link>
        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
