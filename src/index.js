import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import './Styled/scss/index.scss';
import 'antd/dist/antd.css';

ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
