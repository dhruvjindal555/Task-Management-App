# Task Manager App

A modern task manager application built with React, Express, and MongoDB. This project features a sleek UI with Tailwind CSS and glassmorphism effects, allowing users to easily create, read, update, and delete tasks.

## Deployed Application

[Check out the live demo here](https://task-management-app-sigma-lemon.vercel.app/)  

## Features

- **CRUD Operations:** Create, view, update, and delete tasks.
- **Modern UI:** Responsive design with Tailwind CSS and modern aesthetics.
- **Full Stack:** Separated client and server codebases for clarity and maintainability.
- **RESTful API:** Backend built with Express and connected to MongoDB.

## Folder Structure

/client - Contains the React frontend application /server - Contains the Express backend application

- **server.js:** The main file for the server, running on Nodemon.
- **npm run dev:** Command to run the frontend development server.

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app
```


### Setup the Server

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. Install server dependencies:
    ```bash
    npm install
    ```
3. Create a .env file in the server directory and add your environment variables (e.g., MongoDB connection string):
   ```bash
   MONGO_URI=your_mongo_connection_string
   PORT=8888
   ```
4. Start the server with Nodemon:
   ```bash
   nodemon server.js
   ```
### Setup the Client

1. **Open a new terminal window/tab and navigate to the client directory:**

   ```bash
   cd client

   ```

2. Install client dependencies::
    ```bash
    npm install
    ```
3. Start the frontend development server:
   ```bash
   npm run dev
    ```
