import React from 'react';
import '../styles/Produtos.css';
import arrayProducts from '../helpers/arrayProdutos';

export default function Produtos() {
  // console.log('array >>>>>>', arrayProducts);
  return (
    <div className="container-fluid product-imageContainer">
      <img src="/img/Group62.jpg" className="img-fluid product-imageBackground" alt="imagemFundoProdutos" />
      <div className="product-productsContainer">
        <h3 className="product-title" style={{ fontWeight: 700 }}>PRODUTOS EM DESTAQUE</h3>
        <div className="product-productList">
          {arrayProducts.map((product) => (
            <div className="card product-card">
              <img src={product.image} className="card-img-top product-imgCard" alt="imagemProduto" />
              <div className="barra"></div>
              <div className="product-cardBody">
                <div className="card-text product-name">{product.nome}</div>
                <div className="card-text product-prices">
                  <div className="product-oldPrice">{product.oldPrice}</div>
                  <div className="product-newPrice">{product.newPrice}</div>
                </div>
                <div className="product-installments" style={{ display: product.parcela ? 'block' : 'none' }}>
                  {product.parcela}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
