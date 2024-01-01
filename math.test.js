import { expect, it } from "vitest";
import { add } from "./math";

it("should return a sum of numbers", () => {
  expect(add([1, 2, 3])).toBe(6);
});
