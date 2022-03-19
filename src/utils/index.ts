import { Noop } from '../types';

export const getRandomItem = <Item>(items: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

// eslint-disable-next-line  @typescript-eslint/no-empty-function
export const noop: Noop = () => {};
