import axios from "axios";

const API_BASE_URL = "https://task-management-app-a2r6.onrender.com/api";  // Ensure this matches your backend setup

export const getAllTasks = () => axios.get(`${API_BASE_URL}/getAllTasks`);
export const createTask = (taskData) => axios.post(`${API_BASE_URL}/post`, taskData);
export const updateTask = (id, taskData) => axios.put(`${API_BASE_URL}/update/${id}`, taskData);
export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/delete/${id}`);
