import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, updateTask, getAllTasks } from "../utils/api";

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    if (id) {
      fetchTasks();
    }
  }, [id]);

  const fetchTasks = async () => {
    const response = await getAllTasks();
    const taskToEdit = response.data.tasks.find(task => task._id === id);
    if (taskToEdit) {
      setFormData(taskToEdit);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateTask(id, formData);
    } else {
      await createTask(formData);
    }
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-white w-96">
        <h1 className="text-2xl font-bold mb-4">{id ? "Edit Task" : "Create Task"}</h1>
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/20 text-white placeholder-gray-300 border border-gray-500 focus:outline-none"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/20 text-white placeholder-gray-300 border border-gray-500 focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 rounded transition">
          {id ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
