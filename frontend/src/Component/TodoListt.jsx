import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineEditNote } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
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

  useEffect(() => {
    fetchTodos();
  }, []);

  // ✅ Fetch all Todos
  const fetchTodos = async () => {
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // ✅ Start Editing
  const handleEditClick = (task) => {
    setEditingTask(task._id);
    setFormData(task);
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Save updated task
  const handleSave = async () => {
    try {
      const res = await axios.put(`${API_URL}/${editingTask}`, formData);
      setTodos(todos.map((t) => (t._id === editingTask ? res.data : t))); // update list instantly
      setEditingTask(null);
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  // ✅ Delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((t) => t._id !== id)); // remove from list instantly
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <div style={{ padding: "12px 24px" }}>
      <main style={{ border: "1px solid #000", borderRadius: "12px" }}>
        <h1 style={{ textAlign: "center", padding: "12px" }}><Link to="/Todo">To-Do List</Link></h1>

        {/* Todo Table */}
        <div style={{ marginTop: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th>Task</th>
                <th>Description</th>
                <th>Category</th>
                <th>When</th>
                <th>Priority</th>
                <th>Fulfillment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((item) => (
                <tr key={item._id}>
                  <td>{item.task}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>
                    {item.date} {item.time}
                  </td>
                  <td>{item.priority}</td>
                  <td>{item.fulfillment}</td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <MdOutlineEditNote
                      style={{ cursor: "pointer", color: "#007aff" }}
                      title="Edit"
                      onClick={() => handleEditClick(item)}
                    />
                    <FaTrash
                      style={{ cursor: "pointer", color: "red" }}
                      title="Delete"
                      onClick={() => handleDelete(item._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Form */}
        {editingTask && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              border: "1px solid #077aff",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>Edit Task</h2>
            <input
              type="text"
              name="task"
              value={formData.task}
              onChange={handleChange}
              placeholder="Task"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            <input
              type="text"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              placeholder="Priority"
            />
            <input
              type="text"
              name="fulfillment"
              value={formData.fulfillment}
              onChange={handleChange}
              placeholder="Fulfillment"
            />
            <div style={{ marginTop: "10px" }}>
              <button onClick={handleSave} style={{ marginRight: "10px" }}>
                Save
              </button>
              <button onClick={() => setEditingTask(null)}>Cancel</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default TodoList;
