const {
  delayResult,
  runSequential,
  runParallel,
  compareExecutionTimes,
} = require("../excersise/AsyncParallel");

describe("delayResult", () => {
  test("should return a Promise", () => {
    const result = delayResult("Hello", 10);

    expect(result).toBeInstanceOf(Promise);
  });

  test("should resolve with the given value", async () => {
    const result = await delayResult("Hello", 10);

    expect(result).toBe("Hello");
  });
});

describe("runSequential", () => {
  test("should return the three results in order", async () => {
    const result = await runSequential([10, 20, 30]);

    expect(result.results).toEqual(["First", "Second", "Third"]);
  });

  test("should return the execution time", async () => {
    const result = await runSequential([10, 20, 30]);

    expect(typeof result.elapsedTime).toBe("number");
    expect(result.elapsedTime).toBeGreaterThan(0);
  });
});

describe("runParallel", () => {
  test("should return the three results in order", async () => {
    const result = await runParallel([10, 20, 30]);

    expect(result.results).toEqual(["First", "Second", "Third"]);
  });

  test("should return the execution time", async () => {
    const result = await runParallel([10, 20, 30]);

    expect(typeof result.elapsedTime).toBe("number");
    expect(result.elapsedTime).toBeGreaterThan(0);
  });
});

describe("compareExecutionTimes", () => {
  test("should return sequential and parallel execution results", async () => {
    const result = await compareExecutionTimes([10, 20, 30]);

    expect(result).toHaveProperty("sequential");
    expect(result).toHaveProperty("parallel");

    expect(result.sequential.results).toHaveLength(3);
    expect(result.parallel.results).toHaveLength(3);
  });
});
