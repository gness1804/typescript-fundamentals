import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.getElementById('root');
render(<App field1="history" field2="software development"/>, root);

if (module && module.hot) {
  module.hot.accept();
  module.hot.dispose(() => render(<App field1="history" field2="software development"/>, root));
}

export default {};

