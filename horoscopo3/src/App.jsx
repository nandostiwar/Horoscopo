import React from 'react'
import './App.css'
import Card from './Card'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const App = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const goTo = useNavigate();

  const botonUser = (event) => { goTo("/User") }
  const botonAdmin = (event) => { goTo("/Admin") }
  const validateUser = (event) => {
    if(username === 'user' && password === 'user123') {
      goTo("/User");} 
    else if(username === 'admin' && password==='admin123'){
      goTo("/Admin");} 
    else {
      alert("Usuario Incorrecto")
    }
  }
  
  return (
    <div className='App'>
      <h1>INICIO</h1>
      <br></br>
      <form onSubmit={validateUser}>
          <h4 className="txt">Usuario</h4>  
          <input type="text" onChange={(e)=> setUsername(e.target.value)}/><br></br>
          <h4 className="txt">Contraseña</h4>  
          <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
          <br></br><br></br>
          <input type="submit" value="Ingresar"/>
      </form>
    </div>
  )
}

export default App
