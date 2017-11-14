import React from 'react';
import ReactDOM from 'react-dom';
import 'cwds-components/dist/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
