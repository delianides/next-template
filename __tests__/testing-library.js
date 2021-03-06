import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages/index";

test("renders deploy link", () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(/Hello Next\.js at Underbelly/);
  expect(linkElement).toBeInTheDocument();
});
