import React from 'react';
import '../styles/BarraDeTarefas.css';

export default function BarraDeTarefas() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src="/img/Group13.png" alt="imagem" />
        <img src="/img/EletricJSantos.png" className="logo" alt="Logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-link" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Lâmpadas</a></li>
                <li><a className="dropdown-item" href="#">Luzes</a></li>
                <li><a className="dropdown-item" href="#">Luminárias</a></li>
                <li><a className="dropdown-item" href="#">Luzes</a></li>
                <li><a className="dropdown-item" href="#">Decorações</a></li>
                <li><a className="dropdown-item" href="#">Acessórios</a></li>
                <li><a className="dropdown-item" href="#">Ferramentas</a></li>
                <li><a className="dropdown-item" href="#">Utensílios Domésticos</a></li>
                <li><a className="dropdown-item" href="#">Cabos</a></li>
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
