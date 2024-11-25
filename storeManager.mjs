import { addItem, removeItem, listItems } from "./inventory.mjs";

const exampleInventory = [
  { name: "apple", quantity: 10 },
  { name: "banana", quantity: 5 },
  { name: "orange", quantity: 8 },
  { name: "grape", quantity: 3 },
  { name: "kiwi", quantity: 6 },
  { name: "mango", quantity: 7 },
  { name: "peach", quantity: 4 },
  { name: "pear", quantity: 2 },
  { name: "cherry", quantity: 9 },
];
// ChatGPT for inventory example

const inventory = [];
exampleInventory.forEach((exampleInventory) => {
  addItem(exampleInventory, inventory);
});

removeItem("banana", inventory);
removeItem("cherry", inventory);

listItems(inventory);

console.log(listItems(inventory));
