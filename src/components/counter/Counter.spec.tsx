import { render } from "@testing-library/react";
import { Counter } from "./Counter";

it("default count = 0, and counter = 1", () => {
  render(<Counter defaultCount={0} description="My Counter" />);
});

it.todo("default count = 0, and + clicked then counter = 1");
it.todo("default count = 0, and - clicked then counter = -1");
