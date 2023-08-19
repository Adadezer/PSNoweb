import React from 'react';
import '../styles/Products.css';
import arrayProducts from '../helpers/arrayProducts';

export default function Produtos() {
  return (
    <div className="container-fluid product-imageContainer">
      <img src="/img/imageProducts.jpg" className="img-fluid product-imageBackground" alt="imagemFundoProdutos" />
      <div className="product-productsContainer">
        <h4 id="product-list" className="product-title" style={{ fontWeight: 700 }}>PRODUTOS EM DESTAQUE</h4>
        <div className="product-productList">
          {arrayProducts.map((product) => (
            <div className="card product-card" style={{ backgroundColor: 'transparent' }}>
              <img src={product.image} className="card-img-top product-imgCard" alt="imagemProduto" />
              <div className="barra" />
              <div className="product-cardBody">
                <div className="card-text product-name">{product.name}</div>
                <div className="card-text product-prices">
                  <div className="product-oldPrice">{product.oldPrice}</div>
                  <div className="product-newPrice">{product.newPrice}</div>
                </div>
                <div className="product-installments" style={{ display: product.installments ? 'block' : 'none' }}>
                  {product.installments}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
