import {
  fib
} from "../src/index.js";

describe("index.js", () => {
  describe("base case fib(1)", () => {
    it("should return 1", () => {
      expect(fib(1)).toBe(1);
    });
  });
});

describe("index.js", () => {
  describe("base case fib(2)", () => {
    it("should return 1", () => {
      expect(fib(2)).toBe(1);
    });
  });
});

describe("index.js", () => {
  describe("fib(10)", () => {
    it("should return 55", () => {
      expect(fib(10)).toBe(55);
    });
  });
});

