import React from 'react'
import './App.css'
import Card from './Card'
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className='App'>
        <h1>USUARIO</h1>
        <div className='container'>
        <Link to="/">
            <Card titulo="REGRESAR"/>
        </Link>
        </div>
    </div>
  )
}

export default User