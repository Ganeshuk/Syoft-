import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      history.push('/login');
    }
  }, [history]);

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div className="container">
      {user && (
        <div className="dashboard-info">
          <h1>Dashboard</h1>
          <p><strong>First Name:</strong> {user.user_firstname}</p>
          <p><strong>Email:</strong> {user.user_email}</p>
          <p><strong>Phone:</strong> {user.user_phone}</p>
          <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
