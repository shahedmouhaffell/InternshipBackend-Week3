function delayResult(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Sequential Execution
async function runSequential(delays = [1000, 2000, 3000]) {
  const start = performance.now();

  const first = await delayResult("First", delays[0]);
  const second = await delayResult("Second", delays[1]);
  const third = await delayResult("Third", delays[2]);

  const end = performance.now();

  return {
    results: [first, second, third],
    elapsedTime: end - start,
  };
}

// Parallel Execution
async function runParallel(delays = [1000, 2000, 3000]) {
  const start = performance.now();

  const results = await Promise.all([
    delayResult("First", delays[0]),
    delayResult("Second", delays[1]),
    delayResult("Third", delays[2]),
  ]);

  const end = performance.now();

  return {
    results,
    elapsedTime: end - start,
  };
}

// Compare execution times
async function compareExecutionTimes(delays = [1000, 2000, 3000]) {
  const sequential = await runSequential(delays);
  const parallel = await runParallel(delays);

  return {
    sequential,
    parallel,
  };
}

module.exports = {
  delayResult,
  runSequential,
  runParallel,
  compareExecutionTimes,
};
