const {
  inventory,
  addItem,
  removeItem,
  updateQuantity,
  findBySku,
  lowStock,
  inventoryValue,
} = require("../excersise/inventory");

describe("inventory", () => {
  const laptop = {
    sku: "P101",
    name: "Laptop",
    price: 1000,
    quantity: 5,
  };

  const mouse = {
    sku: "P102",
    name: "Mouse",
    price: 25,
    quantity: 2,
  };

  const keyboard = {
    sku: "P103",
    name: "Keyboard",
    price: 50,
    quantity: 10,
  };

  beforeEach(() => {
    inventory.clear();
  });

  // addItem
  describe("addItem", () => {
    test("should add a product to inventory", () => {
      addItem(laptop);

      expect(inventory.has("P101")).toBe(true);
      expect(inventory.get("P101")).toEqual(laptop);
    });

    test("should not add a product with a duplicate SKU", () => {
      addItem(laptop);
      addItem({ ...laptop, name: "Another Laptop" });

      expect(inventory.size).toBe(1);
      expect(inventory.get("P101")).toEqual(laptop);
    });
  });

  // removeItem
  describe("removeItem", () => {
    test("should remove an existing product", () => {
      addItem(laptop);

      const result = removeItem("P101");

      expect(result).toBe(true);
      expect(inventory.has("P101")).toBe(false);
    });

    test("should return false when removing a non-existing product", () => {
      const result = removeItem("P999");

      expect(result).toBe(false);
    });
  });

  // updateQuantity
  describe("updateQuantity", () => {
    test("should update the quantity of an existing product", () => {
      addItem(laptop);

      updateQuantity("P101", 8);

      expect(inventory.get("P101").quantity).toBe(8);
    });

    test("should not modify the original product object", () => {
      addItem(laptop);

      updateQuantity("P101", 8);

      expect(laptop.quantity).toBe(5);
      expect(inventory.get("P101").quantity).toBe(8);
    });

    test("should not update a non-existing product", () => {
      updateQuantity("P999", 8);

      expect(inventory.has("P999")).toBe(false);
    });
  });

  // findBySku
  describe("findBySku", () => {
    test("should return the correct product by SKU", () => {
      addItem(laptop);

      const result = findBySku("P101");

      expect(result).toEqual(laptop);
    });

    test("should return undefined when SKU does not exist", () => {
      const result = findBySku("P999");

      expect(result).toBeUndefined();
    });
  });

  // lowStock
  describe("lowStock", () => {
    test("should return products with quantity below the threshold", () => {
      addItem(laptop);
      addItem(mouse);
      addItem(keyboard);

      const result = lowStock(5);

      expect(result).toEqual([mouse]);
    });

    test("should return an empty array when no products are below the threshold", () => {
      addItem(keyboard);

      const result = lowStock(5);

      expect(result).toEqual([]);
    });
  });

  // inventoryValue
  describe("inventoryValue", () => {
    test("should calculate the total inventory value", () => {
      addItem(laptop);
      addItem(mouse);
      addItem(keyboard);

      const result = inventoryValue();

      expect(result).toBe(5550);
    });

    test("should return zero when inventory is empty", () => {
      const result = inventoryValue();

      expect(result).toBe(0);
    });
  });
});
