import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Todoo() {
  const [formData, setFormData] = useState({
    task: "",
    description: "",
    category: "",
    date: "",
    time: "",
    priority: "",
    fulfillment: "",
  });

  const API_URL = "http://localhost:8080/api/todo";
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/add`, formData);
      alert(" Task added successfully!");
      navigate("/TodoList"); // go to list page
    } catch (error) {
      alert(" Failed to add task. Check console.");
      console.error(error);
    }
  };

  const handleCancel = () => {
    navigate("/TodoList"); // go back without saving
  };

  return (
    <div style={{ padding: "20px", background: "#fff", borderRadius: "10px" }}>
      <h2>Add Task</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
          placeholder="Task"
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        {/* Priority Dropdown */}
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Priority
          </option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        {/* Fulfillment Dropdown */}
        <select
          name="fulfillment"
          value={formData.fulfillment}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Scheduled">Scheduled</option>
        </select>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#007aff",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={{
              backgroundColor: "#6c757d",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Todoo;
