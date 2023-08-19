import React from 'react';
import '../styles/Navbar.css';
import arrayCategories from '../helpers/arrayCategories';

export default function BarraDeTarefas() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src="/img/imageNavbar.png" className="imageNavbar" alt="imagem" />
        <img src="/img/EletricJSantos.png" className="logo" alt="Logo" />
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav teste">
            <li className="nav-item">
              <a id="home" className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                {arrayCategories.map((category) => (
                  <div className="dropdownContainer">
                    <img
                      src={category.image}
                      className="dropdownImageCategory"
                      style={{
                        width: '45px', height: '45px', padding: '3%', margin: '3% 0 3% 10%', 
                      }}
                      alt="imagem categorias" />
                    <li>
                      <a
                        className="dropdown-item"
                        style={{ fontWeight: '600', marginRight: '35px' }}
                        href="#">{category.name}
                      </a>
                    </li>
                  </div>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Localização</a>
            </li>
            <button type="button" className="btn-navyBlue">Contato</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
