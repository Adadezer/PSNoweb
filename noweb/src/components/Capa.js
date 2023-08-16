import React from 'react';
import '../styles/Capa.css';

export default function Capa() {
  return (
    <div className="container-fluid image-container">
      <img src="/img/Group61.jpg" className="img-fluid teste" alt="imagemFundoCapa" />
      <div className="overlay">
          <h1 style={{ fontWeight: 700 }}>ILUMINE O SEU <br />DIA A DIA</h1>
          <p>Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!</p>
        <div className="buttons-cape">
          <button type="button" className="btn-yellow" style={{ fontWeight: 700 }}>VEJA NOSSOS PRODUTOS</button>
          <button type="button" className="btn-whiteTransparent" style={{ fontWeight: 700 }}>NOS CONHEÇA MELHOR</button>
        </div>
        <div className="goDown">
          <img src="/img/arrow-down.png" className="arrowDown" alt="seta para baixo" />
          <p>Role para ver mais</p>
        </div>
      </div>
    </div>
  );
}
