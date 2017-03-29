import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './App';
import WordDescriptionPage from './WordDescriptionPage';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class AppWrapper extends React.Component {
  render = () => {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/word/:word" component={WordDescriptionPage}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);
