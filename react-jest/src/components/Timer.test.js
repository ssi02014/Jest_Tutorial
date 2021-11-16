import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  Date.now = jest.fn();
  Date.now.mockReturnValue = 1234;
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
