import React from "react";

import { MdOutlineEditNote } from "react-icons/md";
import { FaTrash } from "react-icons/fa";


function TodoList() {
  const dummyData = [
    {
      task: "Buy Groceries",
      description: "Purchase vegetables, fruits, and milk",
      category: "Personal",
      when: "2025-09-03 10:00 AM",
      priority: "High",
      fulfillment: "Pending",
    },
    {
      task: "Team Meeting",
      description: "Discuss project progress with the development team",
      category: "Work",
      when: "2025-09-04 02:00 PM",
      priority: "Medium",
      fulfillment: "Scheduled",
    },
    {
      task: "Doctor Appointment",
      description: "Annual health check-up",
      category: "Health",
      when: "2025-09-05 09:30 AM",
      priority: "High",
      fulfillment: "Confirmed",
    },
  ];

  return (
    <div style={{ padding: "12px 24px" }}>
      <main style={{ border: "1px solid #000", borderRadius: "12px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "12px 24px",
            borderRadius: "12px",
          }}
        >
          <h1>To-Do List </h1>
        </div>

        {/* header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 24px",
            width: "100%",
            gap: "5%",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#e6e6e6",
              borderRadius: "8px",
              textAlign: "center",
              border: "1px solid red",
              width: "40%",
            }}
          >
            <span>Add a new to-do</span>
          </div>

          <div
            style={{
              display: "flex",
              padding: "12px 24px",
              gap: "20%",
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "8px",
                backgroundColor: "#007aff",
                borderRadius: "8px",
                textAlign: "center",
                color: "#e6e6e6",
                width: "20%",
              }}
            >
              <span>All</span>
            </div>
            <div
              style={{
                padding: "8px",
                backgroundColor: "#e6e6e6",
                borderRadius: "8px",
                textAlign: "center",
                border: "1px solid red",
                width: "15%",
              }}
            >
              <span>To-Do</span>
            </div>
            <div
              style={{
                padding: "8px",
                backgroundColor: "#e6e6e6",
                borderRadius: "8px",
                textAlign: "center",
                border: "1px solid red",
                width: "15%",
              }}
            >
              <span>Completed</span>
            </div>
          </div>
        </div>
      </main>
      <div style={{ marginTop: "50px" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Category</th>
              <th>when</th>
              <th>Priority</th>
              <th>Fulfillment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <tr key={index}>
                <td>{item.task}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.when}</td>
                <td>{item.priority}</td>
                <td>{item.fulfillment}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <MdOutlineEditNote 
                    style={{ cursor: "pointer", color: "#007aff" }}
                    title="Edit"
                  />
                  <FaTrash
                    style={{ cursor: "pointer", color: "red" }}
                    title="Delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
