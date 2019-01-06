import './index.css';

import CodemaniaApp from './components/CodemaniaApp';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

require('dotenv').config();

const flags = {
	is2019: process.env.REACT_APP_FLAGS_IS2019
};

ReactDOM.render(<CodemaniaApp flags={flags} />, document.getElementById('root'));
registerServiceWorker();
