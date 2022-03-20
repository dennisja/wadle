import { Noop } from '../types';

const getRandomItem = <Item>(items: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

// eslint-disable-next-line  @typescript-eslint/no-empty-function
const noop: Noop = () => {};

export { getRandomItem, noop };
