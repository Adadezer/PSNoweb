import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const slogan = `
    Venha na Elétrica J. Santos e garanta a melhor
    
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
        <div className="footer-socialMedia">
          <p className="footer-socialText">NOS SIGA NAS REDES</p>
          <div className="footer-containerSocialLogos">
            <img src="/img/logoWhatsapp.png" className="footer-socialLogos" alt="logoWhatsApp" />
            <img src="/img/logoInstagram.png" className="footer-socialLogos" alt="logoInstagram" />
            <img src="/img/logoFacebook.png" className="footer-socialLogos" alt="logoFacebook" />
          </div>
        </div>
      </div>
    </div>
  );
}
