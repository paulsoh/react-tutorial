import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class AppWrapper extends React.Component {
  render = () => {
    return (
      <App />
    );
  }
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);
