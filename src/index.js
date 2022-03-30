import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import WebFontLoader from 'webfontloader';

import { App } from './components/App/App';
import './css/index.css';

WebFontLoader.load({
  google: {
    families: ['Open Sans:300,400,700'],
  },
});

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);