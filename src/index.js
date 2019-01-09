import './index.css';

import CodemaniaApp from './components/CodemaniaApp';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

require('dotenv').config();

ReactDOM.render(<CodemaniaApp />, document.getElementById('root'));
registerServiceWorker();
