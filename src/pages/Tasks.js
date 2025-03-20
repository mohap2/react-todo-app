import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import AddTask from "../components/AddTask";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from API when the page loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  // Add new task
  const addTask = (text) => {
    const newTask = { id: Date.now(), title: text, completed: false }; // Use title, not text
    setTasks([...tasks, newTask]);
  };
  

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newText } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
      <TodoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default Tasks;
