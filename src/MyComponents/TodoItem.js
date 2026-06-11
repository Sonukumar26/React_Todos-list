import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card shadow-sm mb-3 border-0 todo-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="card-title">📌 {todo.title}</h5>
            <p className="card-text text-muted">
              {todo.desc}
            </p>
          </div>

          <span className="badge bg-info">
            #{todo.sno}
          </span>
        </div>

        <div className="mt-3">
          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => onDelete(todo)}
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
};