import { renderToStaticMarkup } from 'react-dom/server';
import { writeFileSync } from 'fs';
import { join } from 'path';

import { App } from './components';

const html = renderToStaticMarkup(App());
console.log(html);
writeFileSync(join(__dirname, '..', 'docs', 'index.html'), html);
