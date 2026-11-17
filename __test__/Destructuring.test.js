const Destructuring = require("../excersise/Destructuring");

describe("Destructuring", () => {
  test("should return the correct user data", () => {
    const result = Destructuring();

    expect(result).toEqual({
      id: 10,
      name: "Lina",
      city: "Amman",
      roles: ["editor", "reviewer"],
    });
  });
  test("should return an object", () => {
    const result = Destructuring();

    expect(result).not.toBeNull();
    expect(typeof result).toBe("object");
  });
});
