import React from 'react';
import '../styles/About.css';

export default function About() {
  const aboutUs = `
  Desde 1970 somos especializados em materiais elétricos, sendo
  uma das principais distribuidoras do setor.
  Oferecemos os melhores produtos, com o preço que cabe no seu
  bolso e atende todas as necessidades do seu dia a dia.
  Aqui você irá encontrar lustres, luminárias, utilidades domésticas,
  ferramentas, acessórios, lâmpadas, fios e cabos, quadros de
  distribuição, caixas de entrada padrão Eletropaulo, materiais
  elétricos em geral, equipamentos de segurança e comunicação.
  `;

  return (
    <div className="container-fluid about-imageContainer">
      <img src="/img/Group66.png" className="img-fluid" alt="imagemFundoSobre" />
      <div className="about-aboutContainer">
        <h3 className="about-title" style={{ fontWeight: 700 }}>SUA MELHOR OPÇÃO</h3>
        <div className="about-content">
          <div className="about-photoStore">
            <img src="img/About1.png" className="about-imageStore" alt="" />
          </div>
          <div className="about-descriptionContainer">
            <div className="about-description" dangerouslySetInnerHTML={{ __html: aboutUs.replace(/\n/g, '<br>') }} />
            <button type="button" className="about-button">SAIBA MAIS SOBRE NÓS</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
