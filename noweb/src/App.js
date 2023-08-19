import './App.css';
import Navbar from './components/Navbar';
import Cape from './components/Cape';
import Products from './components/Products';
import Categories from './components/Categories';
import About from './components/About';
import Telesales from './components/Telesales';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Cape />
      <Products />
      <Categories />
      <About />
      <Telesales />
      <Footer />
    </>
  );
}

export default App;
