import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/LightSwitch ';
import LightSwitch from './components/LightSwitch ';
ReactDOM.render(<ClickityClick />, document.getElementById('root'));

ReactDOM.render(
  <div>
    Mount Components Here
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
