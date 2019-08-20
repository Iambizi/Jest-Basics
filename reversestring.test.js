const reverseString = require("./reversestring");

// We first Test to see if reverse string function exists
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

// Actual Test cases

test("string reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("string reverses with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
