import './App.css';
import demozathlogo from './imagenes/logodemozath.png'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
    <div classname='freecodecamp-logo-contenedor'> 
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo de freeCodeCamp'/>
      </div>
    <div className='contenedor-calculadora'>
      </div>
    </div>
  );
}

export default App;
