import { VFC } from 'react';

export type IconProps = JSX.IntrinsicElements['svg'] & { iconName: string };

const Icon: VFC<IconProps> = ({
  iconName,
  height = '24',
  width = '24',
  ...props
}) => (
  <svg height={height} width={width} {...props}>
    <use href={`/sprite.svg#${iconName}`} />
  </svg>
);

export const createIconComponent = (iconName: string) => {
  const IconComponent: VFC<JSX.IntrinsicElements['svg']> = (props) => (
    <Icon {...props} iconName={iconName} />
  );
  return IconComponent;
};

export default Icon;
