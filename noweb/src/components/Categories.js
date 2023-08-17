import React from 'react';
import '../styles/Categories.css';
import arrayCategories from '../helpers/arrayCategories';

export default function Categories() {
  return (
    <div className="container-fluid categories-imageContainer">
      <img src="/img/imageCategory.jpg" className="img-fluid" alt="imagemFundoCategorias" />
      <div className="category-categoriesContainer">
        <h3 className="category-title" style={{ fontWeight: 700 }}>CATEGORIAS</h3>
        <div className="category-categoriesList">
            {arrayCategories.map((category) => (
              <div>
                <h5 className="card-title category-cardTitle" style={{ fontWeight: 700 }}>
                  {category.name === 'Utensílios Domésticos'
                    ? (<>UTENSÍLIOS <br /> DOMÉSTICOS</>) : (category.name.toUpperCase())}
                </h5>
                <div className="card" style={{ backgroundColor: 'transparent', border: 'transparent' }}>
                  <div className="card-body category-cardBody">
                    <img
                      src={category.image}
                      className="card-img-top"
                      style={{ width: '100px', height: '100px', margin: '20px' }}
                      alt="imagemCategoria"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

      </div>
    </div>
  );
}
