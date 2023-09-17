import React from 'react'
import './App.css'
import Card from './Card'
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className='App'>
        <h1>USUARIO</h1>
        <br></br>
        <div className='container'>
          <Link to="/">
              <Card titulo="REGRESAR"/>
          </Link>
          <Card />
          <Card titulo="mina 2"/>
          <Card titulo="mina 3"/>
          <Card titulo="mina 4"/>
        </div>
    </div>
  )
}

export default User