function ProjectCard({ project, onDeleteProject }) {
  return (
    <article className="project-card">
      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteProject(project.id)}
        aria-label={`Delete ${project.title}`}
      >
        <span></span>
        <span></span>
      </button>

      <div className="project-info">
        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;