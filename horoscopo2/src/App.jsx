import React from 'react'
import './App.css'
import Card from './componentes/card'
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <div className='AppCss'>
      <h1>Inicio</h1>
      <div className='container'>
      <Link to="/User">
        <Card titulo="Usuario"/>
      </Link>
      <Link to="/Admin">
        <Card titulo="Administrador"/>
      </Link>
      </div>
    </div>
  )     
}

export default App

