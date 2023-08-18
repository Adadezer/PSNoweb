import React from 'react';
import '../styles/Cape.css';

export default function Cape() {
  const textCape = `
    Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia
    a dia! Temos produtos para toda sua casa com a melhor
    qualidade e atendimento da região!
  `;

  function scrollToProducts(event) {
    event.preventDefault();
    
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
          <div className="cape-title" style={{ fontWeight: 700 }}>ILUMINE O SEU DIA A DIA</div>
          <div className="teste" dangerouslySetInnerHTML={{ __html: textCape.replace(/\n/g, '<br>') }} />
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
