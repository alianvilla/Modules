export const addItem = ({ name }, inventory) => {
  inventory.push(name);
};
export const removeItem = (name, inventory) => {
  const index = inventory.indexOf(name);
  if (index > -1) {
    inventory.splice(index, 1);
  }
};

export const listItems = (inventory) => inventory;
