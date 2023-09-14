import React from 'react'
import './App.css'
import Card from './Card'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <h1>INICIO</h1>
      <div className='container'>
        <Link to="/User">
          <Card titulo="USUARIO"/>
        </Link>
        <Link to="/Admin">
          <Card titulo="ADMINISTRADOR"/>
        </Link>
      </div>
    </div>
  )
}

export default App
