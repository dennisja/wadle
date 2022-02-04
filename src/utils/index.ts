export const getRandomItem = <Item>(items: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};
