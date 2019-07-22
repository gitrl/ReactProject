import React from 'react';
import ReactDOM from 'react-dom';
import 'amazeui-touch/dist/amazeui.touch.min.css';
import './components/clientW'

import AppRouter from './router';

ReactDOM.render(
  <AppRouter/>,
  document.getElementById('app')
);
