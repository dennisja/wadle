import { Radii } from './types';

const radiiArray = [2, 4, 6, 8, 16, 20];

const radii: Radii = Object.assign(radiiArray, {
  xxs: radiiArray[0],
  xs: radiiArray[1],
  s: radiiArray[2],
  m: radiiArray[3],
  l: radiiArray[4],
  xl: radiiArray[5],
  circular: '50%',
});

export default radii;
