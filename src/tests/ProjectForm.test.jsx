import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectForm from "../components/ProjectForm";

describe("ProjectForm", () => {
  test("renders the project form", () => {
    render(<ProjectForm onAddProject={jest.fn()} />);

    expect(
      screen.getByRole("heading", { name: "Add Project" })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Project title")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Project description")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Add" })
    ).toBeInTheDocument();
  });

  test("adds a project when the form is submitted", async () => {
    const user = userEvent.setup();
    const addProject = jest.fn();

    render(<ProjectForm onAddProject={addProject} />);

    await user.type(
      screen.getByLabelText("Project title"),
      "New Website"
    );

    await user.type(
      screen.getByLabelText("Project description"),
      "A new agency website"
    );

    await user.click(
      screen.getByRole("button", { name: "Add" })
    );

    expect(addProject).toHaveBeenCalledWith(
      "New Website",
      "A new agency website"
    );
  });

  test("does not submit an empty project", async () => {
    const user = userEvent.setup();
    const addProject = jest.fn();

    render(<ProjectForm onAddProject={addProject} />);

    await user.click(
      screen.getByRole("button", { name: "Add" })
    );

    expect(addProject).not.toHaveBeenCalled();
  });
});
