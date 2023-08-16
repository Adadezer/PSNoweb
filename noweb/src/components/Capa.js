import React from 'react';
import '../styles/Capa.css';

export default function Capa() {
  function scrollToProducts(event) {
    event.preventDefault(); // Evitar que o link funcione como um link normal
    
    const productsList = document.getElementById('product-list');
    if (productsList) {
      productsList.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  
  return (
    <div className="container-fluid cape-imageContainer">
      <img src="/img/imageCape.jpg" className="img-fluid cape-viewMobile" alt="imagemFundoCapa" />
      <div className="cape-overlay">
          <h1 style={{ fontWeight: 700 }}>ILUMINE O SEU <br />DIA A DIA</h1>
          <p>Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!</p>
        <div className="cape-buttons">
          <button type="button" className="cape-btnYellow" style={{ fontWeight: 700 }}>VEJA NOSSOS PRODUTOS</button>
          <button type="button" className="cape-btnWhiteTransparent" style={{ fontWeight: 700 }}>NOS CONHEÇA MELHOR</button>
        </div>
        <div className="cape-goDown">
          <img src="/img/arrow-down.png" className="cape-arrowDown" alt="seta para baixo" />
          <a href="./Produtos.js#product-list" onClick={scrollToProducts}>Role para ver mais</a>
        </div>
      </div>
    </div>
  );
}
