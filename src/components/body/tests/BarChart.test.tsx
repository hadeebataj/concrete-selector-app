import { render, screen } from "@testing-library/react";
import BarChart from "../BarChart";

describe("Bar chart displayed", () => {
  //Test to check if the chsrt is displayed when the concrete type is selected
  const concreteType = "PAV2";
  test("Bar chart is displayed", () => {
    render(<BarChart concreteType={concreteType} />);
    const chartCanvas = screen.getByRole("img");
    expect(chartCanvas).toBeInTheDocument();
  });
});
