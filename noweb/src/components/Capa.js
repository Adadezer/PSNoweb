import React from 'react';
import '../styles/Capa.css';

export default function Capa() {
  return (
    <div className="container-fluid image-container">
      <img src="/img/Group61.jpg" className="img-fluid" alt="imagemFundoCapa" />
      <div className="overlay">
        <h1 style={{ fontWeight: 700 }}>ILUMINE O SEU <br />DIA A DIA</h1>
        <p>Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!</p>
        <button type="button" className="btn-yellow">VEJA NOSSOS PRODUTOS</button>
        <button type="button" className="btn-whiteTransparent">NOS CONHEÇA MELHOR</button>
      </div>
    </div>
  );
}
