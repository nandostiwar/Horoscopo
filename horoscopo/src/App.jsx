import './App.css'
import Card from "./components/Card"
import signos from './data/vehicles'

function App() {
  const vehicleList = signos.map((v) => {
    return <Card tittle={v.one} description={v.two} />;
  });

  return ( 
  <div className='App'>
    <h1>Horoscopo 2023</h1>
    <div className="container">
    {vehicleList}
    </div>
  </div>
  )
}


export default App
