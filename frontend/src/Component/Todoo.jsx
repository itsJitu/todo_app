import React, { useState } from "react";
import axios from "axios";

function Todo() {
  const [formData, setFormData] = useState({
    task: "",
    description: "",
    category: "",
    date: "",
    time: "",
    priority: "",
    fullfillment: "",  
  });

  const API_URL = "http://localhost:8080/api/todo";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${API_URL}/add`, formData); // Line 24
    setFormData({
      task: "",
      description: "",
      category: "",
      date: "",
      time: "",
      priority: "",
      fulfillment: "",
    });
    alert("To-Do added successfully!");
  } catch (error) {
    // console.error("Error adding To-Do:", {
    //   message: error.message,
    //   code: error.code,
    //   response: error.response ? {
    //     status: error.response.status,
    //     data: error.response.data,
    //   } : null,
    // });
    alert(`Failed to add To-Do: ${error.response?.data?.message || "Check console for details."}`);
  }
};

  const handleCancel = () => {
    setFormData({
      task: "",
      description: "",
      category: "",
      date: "",
      time: "",
      priority: "",
      fulfillment: "", // Fixed typo
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#077aff",
        padding: "12px 24px",
        width: "100%",
        height: "100vh", // Changed to 100vh for full viewport height
      }}
    >
      <div
        style={{
          backgroundColor: "#f8f9fa",
          width: "60%",
          margin: "auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Add a New To-Do</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              padding: "12px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label htmlFor="task">Name:</label>
            <input
              type="text"
              id="task"
              name="task"
              value={formData.task}
              onChange={handleChange}
              placeholder="Enter task name"
              style={{ width: "40%", padding: "8px", borderRadius: "4px" }}
            />
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={{ width: "40%", padding: "8px", borderRadius: "4px" }}
            >
              <option value="" disabled>
                Select Priority
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              padding: "12px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a note"
              style={{ width: "40%", padding: "8px", borderRadius: "4px" }}
            />
            <label htmlFor="fulfillment">Fulfillment:</label>
            <select
              id="fulfillment"
              name="fulfillment" 
              value={formData.fulfillment}
              onChange={handleChange}
              style={{ width: "40%", padding: "8px", borderRadius: "4px" }}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              padding: "12px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{ width: "40%", padding: "8px", borderRadius: "4px" }}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              padding: "12px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label htmlFor="date">date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={{ width: "40%", padding: "8px", borderRadius: "4px" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              padding: "12px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={{ width: "40%", padding: "8px", borderRadius: "4px" }}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="submit"
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#077aff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#6c757d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Todo;