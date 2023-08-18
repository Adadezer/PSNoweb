import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const slogan = `
    Venha na elétrica J. Santos e garanta a melhor
    
    opção para sua casa!
  `;
  return (
    <div className="container-fluid footer-imageContainer">
      <img src="/img/footerBackground.png" className="img-fluid" alt="imagemFundoRodapé" />
      <div className="footer-footerContainer">
        <div className="footer-logo">
          <img src="/img/EletricJSantos2.png" className="footer-logoFooter" alt="logo2" />
          <div className="footer-slogan" dangerouslySetInnerHTML={{ __html: slogan.replace(/\n/g, '<br>') }} />
        </div>
        <div className="footer-redesSociais">

        </div>
      </div>
    </div>
  );
}
