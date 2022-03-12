import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import App from './App';
import { SENTRY_DSN, NODE_ENV, COMMIT_SHA } from './envs';
import reportWebVitals from './reportWebVitals';
import { ROOT_ELEMENT } from './utils/constants';

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.5,
  release: `wadle@${COMMIT_SHA}`,
  environment: NODE_ENV,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  ROOT_ELEMENT
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
