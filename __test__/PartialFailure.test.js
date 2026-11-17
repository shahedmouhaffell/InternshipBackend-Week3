const promises = require("../excersise/promises");

describe("promises", () => {
  test("should return successful results", async () => {
    const result = await promises();

    expect(result.successfulResults).toEqual([
      "First",
      "Second",
      "Fourth",
      "Fifth",
    ]);
  });

  test("should return failed results", async () => {
    const result = await promises();

    expect(result.failures).toEqual(["Third failed"]);
  });

  test("should collect all results without stopping", async () => {
    const result = await promises();

    expect(result.successfulResults).toHaveLength(4);
    expect(result.failures).toHaveLength(1);

    expect(result.successfulResults.length + result.failures.length).toBe(5);
  });

  test("should return an object", async () => {
    const result = await promises();

    expect(result).toEqual({
      successfulResults: ["First", "Second", "Fourth", "Fifth"],
      failures: ["Third failed"],
    });
  });
});
