export type ButtonSize = 'keyBoard' | 'small' | 'medium' | 'large';

export type ArrayWithExtraKeys<ArrayType, ExtraKeys> = Array<ArrayType> & {
  [key in keyof ExtraKeys]: ExtraKeys[key];
};

export type Space = ArrayWithExtraKeys<
  number,
  {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    xxxl: number;
  }
>;

export type Radii = ArrayWithExtraKeys<
  number,
  {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    circular: string;
  }
>;

export type ZIndices = { modalOverlay: number };
