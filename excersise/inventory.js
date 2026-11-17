// addItem({
//   sku: "P101",
//   name: "Laptop",
//   price: 1000,
//   quantity: 5,
// });
// addItem({
//   sku: "P102",
//   name: "Mouse",
//   price: 25,
//   quantity: 2,
// });
// console.log(inventory.size);
// console.log(inventory);
// //removeItem
// function removeItem(sku) {
//   return inventory.delete(sku);
// }
// removeItem("P104");
// console.log(removeItem("P104"));
// console.log(removeItem("P999"));
// console.log(inventory.size);
// console.log(inventory.has("P104"));
// //updateQuantity
// function updateQuantity(sku, newQuantity) {
//   if (!inventory.has(sku)) {
//     return;
//   }
//   const product = inventory.get(sku);
//   product.quantity = newQuantity;
// }
// updateQuantity("P101", 10);
// updateQuantity("P999", 10);
// console.log(inventory.get("P999"));
// //findBySku
// function findBySku(sku) {
//   return inventory.get(sku);
// }
// console.log(findBySku("P101"));
// //lowStock
// function lowStock(threshold) {
//   const products = [...inventory.values()];
//   return products.filter((product) => {
//     return product.quantity < threshold;
//   });
// }
// console.log(lowStock(5));
// //inventoryValue
// function inventoryValue() {
//   const products = [...inventory.values()];

//   return products.reduce((total, product) => {
//     total += product.quantity * product.price;
//     return total;
//   }, 0);
// }
// module.exports = {
//   inventory,
//   addItem,
//   removeItem,
//   updateQuantity,
//   findBySku,
//   lowStock,
//   inventoryValue,
// };
const inventory = new Map();

// addItem
function addItem(item) {
  if (inventory.has(item.sku)) {
    return;
  }

  inventory.set(item.sku, item);
}

// removeItem
function removeItem(sku) {
  return inventory.delete(sku);
}

// updateQuantity
function updateQuantity(sku, newQuantity) {
  if (!inventory.has(sku)) {
    return;
  }

  const product = inventory.get(sku);

  inventory.set(sku, {
    ...product,
    quantity: newQuantity,
  });
}

// findBySku
function findBySku(sku) {
  return inventory.get(sku);
}

// lowStock
function lowStock(threshold) {
  const products = [...inventory.values()];

  return products.filter((product) => {
    return product.quantity < threshold;
  });
}

// inventoryValue
function inventoryValue() {
  const products = [...inventory.values()];

  return products.reduce((total, product) => {
    total += product.quantity * product.price;
    return total;
  }, 0);
}

module.exports = {
  inventory,
  addItem,
  removeItem,
  updateQuantity,
  findBySku,
  lowStock,
  inventoryValue,
};
