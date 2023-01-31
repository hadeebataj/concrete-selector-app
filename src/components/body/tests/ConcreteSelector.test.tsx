import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ConcreteSelector from "../ConcreteSelector";

describe("Selection input field", () => {
  // Test to check if the selection box renders
  test("renders with correct label", () => {
    render(<ConcreteSelector />);
    const cencreteSelectorLabel = screen.getByText(/Designated Concrete Type/);
    expect(cencreteSelectorLabel).toBeInTheDocument();
  });

  // Test to check if the dropdown list is displayed when the selection box is clicked
  test("renders the list of concrete types", async () => {
    render(<ConcreteSelector />);
    const dropdownButton = screen.getByLabelText(/Designated Concrete Type/);
    await user.click(dropdownButton);
    const concreteTypeList = screen.getByRole("listbox");
    expect(concreteTypeList).toBeInTheDocument();
  });
});
