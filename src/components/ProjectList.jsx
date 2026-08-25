function ProjectList({
  projects,
  searchTerm,
  onSearchChange,
  onDeleteProject,
}) {
  return (
    <section className="project-list-section">
      <div className="search-container">
        <label htmlFor="search-projects">
          Search projects
        </label>

        <input
          id="search-projects"
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search projects..."
        />
      </div>

      <div className="project-list">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <button
                type="button"
                className="delete-button"
                aria-label={`Delete ${project.title}`}
                onClick={() => onDeleteProject(project.id)}
              >
                <span></span>
                <span></span>
              </button>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectList;