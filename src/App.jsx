import React from 'react'
import Login from './Components/Login/Login'
import Dashboard from './Components/Master_Dashboard/Dashboard/Dashboard'

function App() {

  var loginSession = localStorage.getItem('loginSession');

  return (
    <>
    {
      loginSession ?
      <Dashboard />
      :
      <Login />
    }
    </>
  )
}

export default App