import React from 'react'
import './App.css'
import Card from './Card'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const App = () => {

  const goTo = useNavigate()
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [boton, setBoton] = useState(0)
  
  const validateUser = (event) => {
    if(username === 'user' && password === 'user123') {
      goTo("/User")} 
    else if(username === 'admin' && password==='admin123'){
      goTo("/Admin")} 
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
      <br></br><br></br>
      <button onClick={() => setBoton(boton=>boton+1)}>Contar</button>
      <h1>{boton}</h1>
    </div>
  )
}

export default App
