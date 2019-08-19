const functions = require("./functions");

test("2 + 2 = 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("2 + 2 not 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Check For Truthy & Falsy Values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

//toEqual
test("Should be falsy", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy"
  });
});

// Less than and greater than
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

//Arrays
test("Admin should be in usernames", () => {
  const usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with Async Data

//Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//Async
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
