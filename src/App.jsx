import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

import projectsData from "./data/projects";

function App() {
  const [projects, setProjects] = useState(projectsData);

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    setProjects((currentProjects) => [
      ...currentProjects,
      newProject,
    ]);
  }

  function handleDeleteProject(projectId) {
    setProjects((currentProjects) =>
      currentProjects.filter(
        (project) => project.id !== projectId
      )
    );
  }

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search)
    );
  });

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <ProjectForm
          onAddProject={handleAddProject}
        />

        <section className="projects-section">
          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
          />

          <ProjectList
            projects={filteredProjects}
            onDeleteProject={handleDeleteProject}
          />
        </section>
      </main>
    </div>
  );
}

export default App;