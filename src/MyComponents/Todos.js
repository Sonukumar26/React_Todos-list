import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, onDelete }) => {
  return (
    <div
      className="container py-4"
      style={{ minHeight: "70vh" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📝 My Todos</h2>

        <span className="badge bg-primary fs-6">
          {todos.length} Tasks
        </span>
      </div>

      {/* Empty State */}
      {todos.length === 0 ? (
        <div className="card text-center shadow-sm p-5">
          <h1>📭</h1>
          <h4>No Todos Available</h4>
          <p className="text-muted">
            Add your first task to get started.
          </p>
        </div>
      ) : (
        <div className="row">
          {todos.map((todo) => (
            <div className="col-md-6 mb-3" key={todo.sno}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <TodoItem
                    todo={todo}
                    onDelete={onDelete}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Info */}
      {todos.length > 0 && (
        <div className="text-center mt-4">
          <p className="text-muted">
            🎯 Keep completing your tasks and stay productive!
          </p>
        </div>
      )}
    </div>
  );
};