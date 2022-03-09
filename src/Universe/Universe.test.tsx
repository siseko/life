import { render, screen } from "@testing-library/react";
import { Universe } from ".";

describe("The Universe component", () => {
  test("if it renders message when empty universe is provided", () => {
    render(<Universe seed={[]} generationsCount={1} />);

    screen.getByText("Empty seed provided");
  });

  test("if it does not render message when universe is provided", () => {
    render(<Universe seed={[[1]]} generationsCount={1} />);

    expect(screen.queryByText("Empty seed provided")).not.toBeInTheDocument();
  });
});
