import { renderToString } from 'react-dom/server';

import { App } from './components';

console.log(renderToString(App()));
