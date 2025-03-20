import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Tasks from "./pages/Tasks";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to the To-Do App</h1>} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
