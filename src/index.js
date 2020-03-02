import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/_App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}