import React from 'react'
import './App.css'
import Card from './componentes/card'
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className='AppCss'>
        <h1>Administrador</h1>
        <div className='container'>
        <Link to="/">
            <Card titulo="Volver"/>
        </Link>
        </div>
    </div>
  )
}

export default Admin