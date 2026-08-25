import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddProject(
      title.trim(),
      description.trim()
    );

    setTitle("");
    setDescription("");
  };

  return (
    <section className="project-form-section">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="project-title">
            Project title
          </label>

          <input
            id="project-title"
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-description">
            Project description
          </label>

          <textarea
            id="project-description"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
          />
        </div>

        <button type="submit">
          Add
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;