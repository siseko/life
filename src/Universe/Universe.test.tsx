import { render, screen } from "@testing-library/react";
import { Universe } from ".";

test("if it renders message when empty universe is provided", () => {
  render(<Universe seed={[]} generationsCount={1} />);

  screen.getByText("Empty seed provided");
});
