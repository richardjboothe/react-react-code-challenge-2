import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from 'containers/HomePage';
import DetailsPage from 'components/DetailsPage';
import NumberPage from 'containers/NumberPage';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="app__header">
            <div className="app__header-title">
              LMNOP LLC.
            </div>
            <div className="app__nav-wrapper">
              <div className="app__header-nav">
                <span className="app__nav-link">
                  <Link to="/">Home</Link>
                </span>
                <span className="app__nav-link">
                  <Link to="/details">Details</Link>
                </span>
                <span className="app__nav-link">
                  <Link to="/number">Number</Link>
                </span>
              </div>
            </div>
          </div>
          <Route exact path="/" component={HomePage} />
          <Route path="/details" component={DetailsPage} />
          <Route path="/number" component={NumberPage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
