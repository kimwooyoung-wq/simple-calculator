import { add } from "../../src/calculator.js";

describe("add", () => {
  test("두 양수를 더한다", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("음수도 처리한다", () => {
    expect(add(-2, 5)).toBe(3);
  });
});