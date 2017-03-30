import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';

import App from './App';
import WordDescriptionPage from './WordDescriptionPage';
import { store } from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class AppWrapper extends React.Component {
  render = () => {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={App}/>
            <Route path="/word/:word" component={WordDescriptionPage}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);
