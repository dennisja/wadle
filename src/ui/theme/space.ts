import { Space } from './types';

const spaceArray = [0, 2, 4, 8, 16, 24, 32, 36, 40];

const space: Space = Object.assign(spaceArray, {
  xxs: spaceArray[1],
  xs: spaceArray[2],
  s: spaceArray[3],
  m: spaceArray[4],
  l: spaceArray[5],
  xl: spaceArray[6],
  xxl: spaceArray[7],
  xxxl: spaceArray[8],
});

export default space;
