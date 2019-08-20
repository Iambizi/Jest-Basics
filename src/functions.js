const axios = require("axios");

// //Initialize a database before each function then clear it after each function

// // beforeEach(() => initDatabase());
// // afterEach(() => closedDatabase());

// // Initialize a database before all functions then clear it after all functions have run
// beforeAll(() => initDatabase());
// afterAll(() => closedDatabase());

// const initDatabase = () => console.log(`Database Initialized...`);
// const closedDatabase = () => console.log(`Databse closed...`);

const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("user is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("user is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: "Brad" };
    user["lastName"] = "Traversy";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "error")
};

module.exports = functions;
