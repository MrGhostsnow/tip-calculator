import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "./Card";

describe("Card component", () => {
  test("renders Card component", () => {
    render(<Card />);

    expect(screen.getByText("Select tip %")).toBeInTheDocument();
  });

  test("handles user input and calculates tip", () => {
    render(<Card />);

    fireEvent.change(screen.getByLabelText("Bill"), {
      target: { value: "100" },
    });
    fireEvent.click(screen.getByText("10%"));
    fireEvent.change(screen.getByLabelText("Number of People"), {
      target: { value: "2" },
    });

    expect(screen.getByText("$10.00")).toBeInTheDocument();

    expect(screen.getByText("$55.00")).toBeInTheDocument();
  });
});
