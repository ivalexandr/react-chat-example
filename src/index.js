import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import WebFontLoader from 'webfontloader';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { App } from './components/App/App';
import './css/index.css';

WebFontLoader.load({
  google: {
    families: ['Open Sans:300,400,700'],
  },
});
dayjs.locale('ru');
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);