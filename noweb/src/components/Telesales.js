import React from 'react';
import '../styles/Telesales.css';

export default function Telesales() {
  return (
    <div className="container-fluid telesales-imageContainer">
      <img src="/img/telesalesBackground.png" className="img-fluid" alt="imagemFundoTelevendas" />
      <div className="telesales-telesalesContainer">
        <div className="telesales-content">
          <div className="telesales-image">
            <img src="img/telesales.png" className="telesales-imageGirl" alt="" />
          </div>
          <div className="telesales-button">
            <button type="button" className="telesales-buttonSales">ACIONE NOSSO TELEVENDAS</button> 
          </div>
        </div>
      </div>
    </div>
  );
}
