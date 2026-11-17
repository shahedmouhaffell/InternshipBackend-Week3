const uniqueTag = require("../excersise/Unique-tags");

describe("uniqueTag", () => {
  const articles = [
    { tags: ["javascript", "react"] },
    { tags: ["react", "css"] },
    { tags: ["javascript", "node"] },
  ];

  test("should return the correct unique tags", () => {
    const result = uniqueTag(articles);

    expect(result).toEqual(["css", "javascript", "node", "react"]);
  });

  test("should return tags in alphabetical order", () => {
    const result = uniqueTag(articles);

    expect(result).toEqual([...result].sort());
  });

  test("should return an array", () => {
    const result = uniqueTag(articles);

    expect(Array.isArray(result)).toBe(true);
  });

  test("should not contain duplicate tags", () => {
    const result = uniqueTag(articles);

    expect(new Set(result).size).toBe(result.length);
  });

  test("should return the correct number of unique tags", () => {
    const result = uniqueTag(articles);

    expect(result).toHaveLength(4);
  });

  test("should return an empty array when articles are empty", () => {
    expect(uniqueTag([])).toEqual([]);
  });
});
