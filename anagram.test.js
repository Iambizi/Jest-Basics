const isAnagram = require("./anagram");

// Another way to see if anagram is indeed a function exists
test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test(" 'cinema' is an anafram of 'iceman' ", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test(" 'Dormitory' is an anafram of 'dirty room##' ", () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test(" 'Hello' is NOT an anagram of 'Aloha' ", () => {
  expect(isAnagram("hello", "aloha")).toBeFalsy();
});
