async function promises() {
  const successfulResults = [];
  const failures = [];

  const promises = [
    Promise.resolve("First"),
    Promise.resolve("Second"),
    Promise.reject("Third failed"),
    Promise.resolve("Fourth"),
    Promise.resolve("Fifth"),
  ];

  const results = await Promise.allSettled(promises);

  results.forEach((result) => {
    if (result.status === "fulfilled") {
      successfulResults.push(result.value);
    } else {
      failures.push(result.reason);
    }
  });

  return {
    successfulResults,
    failures,
  };
}

module.exports = promises;
