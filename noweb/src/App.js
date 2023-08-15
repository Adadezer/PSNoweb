import { Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/ProductCard';

function App() {
  return (
    <>
      <Navbar name="Camisa Azul" price="20.00" currency="BRL" />
      <Card>
        <h1>Olá, Mundo!</h1>
        <p>
          Podemos também escrever parágrafos!
        </p>
      </Card>
    </>

  );
}

export default App;
