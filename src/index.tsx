import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// fonts
import '@fontsource/plus-jakarta-sans/latin.css';

import { theme } from '~/lib/styles/theme';

import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
