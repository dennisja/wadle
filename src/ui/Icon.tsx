import { VFC } from 'react';

const icons = [
  'delete',
  'info',
  'settings',
  'stats',
  'close',
  'github',
  'share',
] as const;

type IconName = typeof icons[number];

type IconProps = JSX.IntrinsicElements['svg'] & { iconName: IconName };

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

export default Icon;
export type { IconProps };
