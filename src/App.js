import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard">
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

// PrivateRoute component to protect the dashboard route
function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('user');
  return isAuthenticated ? children : <Redirect to="/login" />;
}

export default App;

