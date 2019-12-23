import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './login-register/login'
import Dashboard from './dashboard/dashboard';  

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <h2>Welcome to Yogesh's Todo List App</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/dashboard'} className="nav-link">Dashboard</Link></li>
          </ul>
          </nav>
          <hr />
      </div>
      <div>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route path='/dashboard' component={Dashboard} />
          </Switch>
      </div>
      </Router>
    );
  }
}
export default App;