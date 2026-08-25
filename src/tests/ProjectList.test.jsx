import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio",
  },
  {
    id: 2,
    title: "Mobile App",
    description: "A mobile application",
  },
];

describe("ProjectList", () => {
  test("renders all projects", () => {
    render(
      <ProjectList
        projects={projects}
        searchTerm=""
        onSearchChange={jest.fn()}
      />
    );

    expect(
      screen.getByText("Portfolio Website")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Mobile App")
    ).toBeInTheDocument();
  });

  test("calls the search handler when the user searches", async () => {
    const user = userEvent.setup();
    const onSearchChange = jest.fn();

    render(
      <ProjectList
        projects={projects}
        searchTerm=""
        onSearchChange={onSearchChange}
      />
    );

    const searchInput = screen.getByLabelText(
      "Search projects"
    );

    await user.type(searchInput, "mobile");

    expect(onSearchChange).toHaveBeenCalled();
  });

  test("shows a message when there are no projects", () => {
    render(
      <ProjectList
        projects={[]}
        searchTerm="unknown"
        onSearchChange={jest.fn()}
      />
    );

    expect(
      screen.getByText("No projects found.")
    ).toBeInTheDocument();
  });
});
