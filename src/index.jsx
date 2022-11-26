import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './themes/default';
import App from './App';
import { ContextProvider } from './context/default';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextProvider>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </ContextProvider>,
);
