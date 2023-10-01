const { add, subtract, divide, multiply } = require("./math");

describe("Math.js tests", () => {
  it("Should test  add  ", () => {
    expect(add(10, 5)).toBe(15);
  });

  it("Should test subtract", () => {
    expect(subtract(10, 5)).toBe(5);
  });

  it("Should test divide", () => {
    expect(divide(10, 5)).toBe(2);
  });

  it("Should test multiply", () => {
    expect(multiply(10, 5)).toBe(50);
  });
});
