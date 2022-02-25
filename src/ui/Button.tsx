import { forwardRef } from 'react';
import { ButtonProps as ThemeUIBtnProps, Button as ThemeUIBtn } from 'theme-ui';

import { buttonSizes } from './theme/buttons';
import { ButtonSize } from './theme/types';

interface ButtonProps extends ThemeUIBtnProps {
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = 'keyBoard', sx, ...rest }, ref) => (
    <ThemeUIBtn
      {...rest}
      sx={{
        borderRadius: 's',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
        ...buttonSizes[size],
        '&:hover': { cursor: 'pointer' },
        '&:disabled': { cursor: 'not-allowed' },
      }}
      ref={ref}
    >
      {children}
    </ThemeUIBtn>
  )
);

Button.displayName = ThemeUIBtn.displayName;
Button.defaultProps = ThemeUIBtn.defaultProps;

export default Button;
