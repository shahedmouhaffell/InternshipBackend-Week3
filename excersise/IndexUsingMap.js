function indexProducts(products) {
  const myMap = new Map();

  products.forEach((product) => {
    myMap.set(product.sku, product);
  });

  return myMap;
}

const products = [
  { sku: "P101", name: "Laptop", price: 1000 },
  { sku: "P102", name: "Mouse", price: 25 },
  { sku: "P103", name: "Keyboard", price: 50 },
];

const productsMap = indexProducts(products);

console.log(productsMap.get("P101"));
module.exports = indexProducts;
/*
A Map is suitable for this task because it stores key-value pairs, allowing each product to be associated with its unique SKU.

It provides efficient lookups using the `get()` method and makes it easy to check whether a product exists using `has()`.

Unlike searching through an array with `find()`, a Map is designed for direct key-based access. It also provides a `size` property to get the number of stored products.
*/
