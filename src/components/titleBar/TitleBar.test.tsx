import { render, screen } from "@testing-library/react";
import TitleBar from "./TitleBar";

describe("Title bar renders", () => {
  // Test to check if the title bar is render with the correct title
  test("renders correctly", () => {
    render(<TitleBar />);
    const textElement = screen.getByText(/Designated Concrete/);
    expect(textElement).toBeInTheDocument();
  });
});
