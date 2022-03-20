type MediaQuery = 'sm' | 'smToM' | 'm' | 'mToL' | 'l';

type MediaQueries = Record<MediaQuery, string>;

const mediaQueries: MediaQueries = {
  sm: '@media  (max-width: 767px)',
  smToM: '@media (min-width: 768px) and (max-width: 959px)',
  m: '@media (min-width: 960px)',
  mToL: '@media (min-width: 960px) and (max-width: 1279px)',
  l: '@media (min-width: 1280px)',
};

const breakPoints = ['767px', '959px', '1279px', '@media (min-width: 1280px)'];

export default mediaQueries;
export { breakPoints };
export type { MediaQueries };
