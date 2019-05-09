import React, { useState } from 'react';
import Login from './components/Login'
import Users from './components/Users'

import axios from 'axios'

import './App.scss';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = user => {
    axios
      .post('http://localhost:5000/api/auth/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        setLoggedIn(true)
      })
  }

  return (
    <div>
      <header>
        <h1>Users</h1>
      </header>

      {!loggedIn ?
        <Login login={login} /> :
        <Users />
      }

    </div>
  );
}

export default App;
