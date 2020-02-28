import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';

ReactDOM.render(<Router />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}