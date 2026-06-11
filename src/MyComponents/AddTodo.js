import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() || !desc.trim()) {
      alert("⚠️ Title and Description cannot be blank");
      return;
    }

    addTodo(title, desc);

    setTitle("");
    setDesc("");
  };

  return (
    <div className="container my-4">
      <div className="card shadow-lg border-0">
        <div className="card-body">
          <h3 className="text-center mb-4">
            ➕ Add New Todo
          </h3>

          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-bold">
                📝 Todo Title
              </label>

              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="Enter todo title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <small className="text-muted">
                Characters: {title.length}
              </small>
            </div>

            <div className="mb-3">
              <label htmlFor="desc" className="form-label fw-bold">
                📄 Description
              </label>

              <textarea
                id="desc"
                rows="4"
                className="form-control"
                placeholder="Enter todo description..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>

              <small className="text-muted">
                Characters: {desc.length}
              </small>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-success"
              >
                ➕ Add Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};