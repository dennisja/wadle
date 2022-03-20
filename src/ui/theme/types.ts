type ButtonSize = 'keyBoard' | 'small' | 'medium' | 'large';

type ArrayWithExtraKeys<ArrayType, ExtraKeys> = Array<ArrayType> & {
  [key in keyof ExtraKeys]: ExtraKeys[key];
};

type Space = ArrayWithExtraKeys<
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

type Radii = ArrayWithExtraKeys<
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

type ZIndices = { modalOverlay: number; toast: number };

export type { ButtonSize, ArrayWithExtraKeys, Space, Radii, ZIndices };
