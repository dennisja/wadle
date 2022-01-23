import { Global, css } from '@emotion/react';
import { VFC } from 'react';

const GlobalStyles: VFC = () => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          height: 100%;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          overflow-wrap: break-word;
        }
      `}
    />
  );
};

export default GlobalStyles;
