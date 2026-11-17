
const indexProducts = require("../excersise/IndexUsingMap");

describe("indexProducts", () => {
  const products = [
    { sku: "P101", name: "Laptop", price: 1000 },
    { sku: "P102", name: "Mouse", price: 25 },
    { sku: "P103", name: "Keyboard", price: 50 },
  ];

  test("should return a Map", () => {
    const result = indexProducts(products);

    expect(result).toBeInstanceOf(Map);
  });

  test("should contain the correct number of products", () => {
    const result = indexProducts(products);

    expect(result.size).toBe(3);
  });

  test("should use SKU as the key", () => {
    const result = indexProducts(products);

    expect(result.has("P101")).toBe(true);
    expect(result.has("P102")).toBe(true);
    expect(result.has("P103")).toBe(true);
  });

  test("should return the correct product by SKU", () => {
    const result = indexProducts(products);

    expect(result.get("P101")).toEqual({
      sku: "P101",
      name: "Laptop",
      price: 1000,
    });
  });

  test("should store products independently", () => {
    const result = indexProducts(products);

    expect(result.get("P102")).toEqual(products[1]);
    expect(result.get("P103")).toEqual(products[2]);
  });

  test("should return an empty Map when products array is empty", () => {
    const result = indexProducts([]);

    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBe(0);
  });
});
