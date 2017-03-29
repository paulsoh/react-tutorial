import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class AppWrapper extends React.Component {
  render = () => {
    return (
      <Router>
        <Route path="/" component={App}/>
      </Router>
    );
  }
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);
